function anagrams(stringA, stringB) {
    let characterObjectA = createCharacterObject(stringA);
    let characterObjectB = createCharacterObject(stringB);

    let anagramCheck = true;

    for (var char in characterObjectA) {
        if (characterObjectA[char] !== characterObjectB[char]) {
            anagramCheck = false;
        }
    }

    return anagramCheck;
}

function createCharacterObject(string) {
    let characterObject = {};
    for (let i = 0; i < string.length; i++) {
        if (characterObject[string[i]]) {
            ++characterObject[string[i]]
        } else {
            characterObject[string[i]] = 1;
        }
    }

    return characterObject;
}

let result = anagrams("adsjsikedsksk", "adsjsikedskska");
console.log(result);