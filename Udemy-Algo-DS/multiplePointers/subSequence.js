// Check if the subsring charcters exists in the string with same sequence

function isSubsequence(substring, string) {
    let subStringPointer = 0;
    let stringPointer = 0;
    while (stringPointer < string.length) {
        if (substring[subStringPointer] === string[stringPointer]) {
            subStringPointer++;
        }
        if (subStringPointer === substring.length) {
            return true;
        }
        stringPointer++;
    }
    return false;
}


console.log(isSubsequence('sing', 'strig'));