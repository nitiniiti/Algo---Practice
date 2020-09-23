var fs = require('fs') // Its default Module;
var async = require('async') // Please install this dependency;
let targetDirectory = "D:/Projects/practice/Docker/NewFolder" // Please mention the path of directory where files need to be moved;
let searchedDirectory = "D:/Projects/practice/Docker/k8s" // Please mention the path of directory from where files need to be moved;


/* Searching for Files and directories and according calling
copying function for moving file from source directory to target directory */
function searchDirectoryRecusiverly(directoryName) {
    fs.readdir(directoryName, function (err, files) {
        if (err) {
            console.log("Error occured", err);
            return;
        }
        async.each(files, function (filename, callback) {
            let stat;
            filePath = directoryName + '/' + filename;
            fs.lstat(filePath, (err, stat) => {
                if (err) {
                    console.log("Error occured", err);
                    callback(null);
                    return;
                }
                if (stat.isDirectory()) {
                    let newDirectory = directoryName + '/' + filename;
                    searchDirectoryRecusiverly(newDirectory);
                } else {
                    let targetFilePath = targetDirectory + '/' + filename;
                    createCopyOFFile(filePath, targetFilePath).then(() => {
                        console.log("Successfully moved file");
                        callback(null);
                    }).catch((err) => {
                        console.log("Error occured", err);
                        callback(null);
                    });
                }
            })
        }, function (err) {
            if (err) {
                console.log("Error occured", err);
            } else {
                console.log("Successfully moved All the files");
            }
        });
    });
}


// Copying File from source to target directory
function createCopyOFFile(source, target) {
    var rdStream = fs.createReadStream(source);
    var wrStream = fs.createWriteStream(target);
    return new Promise(function (resolve, reject) {
        rdStream.on('error', reject);
        wrStream.on('error', reject);
        wrStream.on('finish', resolve);
        rdStream.pipe(wrStream);
    }).catch(function (error) {
        rdStream.destroy();
        wrStream.end();
        console.log("Error occured", error);
        throw error;
    });
}


searchDirectoryRecusiverly(searchedDirectory);

