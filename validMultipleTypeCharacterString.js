const characters = ["(", ")", "{", "}", "[", "]"];

function validString(s) {
  let stack = [];
  let stringArray = s.split("");
  let validStringFlag = true;

  stringArray.every(element => {
    if (["(", "{", "["].indexOf(element) > -1) {
      stack.push(element);
      return true;
    } else {
      let openingOfCurrentClosingElement =
        characters[characters.indexOf(element) - 1];
      if (stack[stack.length - 1] === openingOfCurrentClosingElement) {
        stack.pop();
        return true;
      } else {
        validStringFlag = false;
        return false;
      }
    }
  });

  return validStringFlag
    ? stack.length == 0
      ? "valid"
      : "Invalid"
    : "Invalid";
}

var isValid = function(s) {
  let charactersArray = [];
  let isValid = true;
  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].indexOf(s[i]) > -1) {
      charactersArray.push(s[i]);
      // console.log(charactersArray)
    } else {
      let charactersArrayLength = charactersArray.length;
      let index = characters.indexOf(s[i]);
      let openingOfCurrentElement = characters[index - 1];
      // console.log(closingOfCurrentElement);
      if (
        charactersArray[charactersArrayLength - 1] == openingOfCurrentElement
      ) {
        //  console.log(charactersArray)
        charactersArray.pop();
      } else {
        isValid = false;
      }
    }
  }
  return isValid ? (charactersArray.length == 0 ? true : false) : false;
};

console.log(isValid("["));
