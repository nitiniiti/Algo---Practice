function countVowels(string) {
    let vowelCount = 0;

    string = string.split("");
    let vowels = ["a", "e", "i", "o", "u"];

    string.forEach(element => {
        if (vowels.includes(element)) {
            vowelCount++;
        }
    });

    return vowelCount;
}


let result = countVowels("adsjsikedsksk");
console.log(result);