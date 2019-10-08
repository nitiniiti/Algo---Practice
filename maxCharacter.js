function maxCharacter(string) {
    let characterObject = {};

    for (let i = 0; i < string.length; i++) {
        if (characterObject[string[i]]) {
            ++characterObject[string[i]]
        } else {
            characterObject[string[i]] = 1;
        }
    }

    let maxCharacter;
    let maxCharacterNumber = 0;
    for (var i in characterObject) {
        if (characterObject[i] > maxCharacterNumber) {
            maxCharacterNumber = characterObject[i];
            maxCharacter = i;
        }
    }
    return maxCharacter;
}


let result = maxCharacter("adsjsikedsksk");
console.log(result);