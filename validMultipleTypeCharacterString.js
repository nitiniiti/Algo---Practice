const characters = ['(', ')', '{', '}', '[', ']'];

function validString(s) {
    let stack = [];
    let stringArray = s.split("");
    let validStringFlag = true;

    stringArray.every(element => {
        if (["(", "{", "["].indexOf(element) > -1) {
            stack.push(element);
            return true
        } else {
            let openingOfCurrentClosingElement = characters[characters.indexOf(element) - 1]
            if (stack[stack.length - 1] === openingOfCurrentClosingElement) {
                stack.pop();
                return true;
            } else {
                validStringFlag = false;
                return false;
            }
        }
    });

    return validStringFlag ? stack.length == 0 ? "valid" : "Invalid" : "Invalid"
}

console.log(validString("[(((([])))){]"));