function caesarCipher(string, number) {
    let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    let stringArray = string.split("");
    for (let i = 0; i < stringArray.length; i++) {
        let alphabetIndex = alphabetArray.indexOf(stringArray[i].toLowerCase());
        let newAlphabet = stringArray[i];
        if (alphabetIndex > -1) {
            let newAlphabetIndex = (number + alphabetIndex) % 26;
            newAlphabet = alphabetArray[newAlphabetIndex];
        }
        stringArray[i] = newAlphabet;
    }

    return stringArray.join("");
}


let result = caesarCipher("I love JavaScript!", 100);
console.log(result);