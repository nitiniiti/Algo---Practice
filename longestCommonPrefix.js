var longestCommonPrefix = function (strs) {
    let commonPrefix = "";
    if (!strs || strs.length == 0) {
        return "";
    } else {
        let currentString = "";
        for (let i = 1; i <= strs[0].length; i++) {
            currentString = strs[0].substring(0, i);
            let prefixCheck = strs.every((str) => {
                if (str.startsWith(currentString)) {
                    return true;
                }
            });
            if (prefixCheck) {
                commonPrefix = currentString;
            }
        }
        return commonPrefix;
    }
};


console.log(longestCommonPrefix(["dog", "racecar", "car"]));