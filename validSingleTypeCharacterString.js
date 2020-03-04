const characters = ['(', ')'];

function validString(s) {
    let stringArray = s.split("");
    let counter = 0;
    stringArray.forEach(element => {
        if (element === characters[0]) {
            counter++
        } else {
            counter--
        }
    });

    return counter == 0 ? "valid" : "InValid"

}


console.log(validString("(((((((()"));

