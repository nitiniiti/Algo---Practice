// Complete the palindromeIndex function below.
function palindromeIndex(s) {
    let palindromCheck = true;
    let ithCharacterCheck;
    let otherCharacterCheck;
    let requiredCharacterIndex;
    for (var i = 0; i < s.length - 1 / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            palindromCheck = false;
            ithCharacterCheck = palindromicCheck(s.slice(0, i) + s.slice(i + 1));
            if (ithCharacterCheck) {
                //  requiredCharacter = s[i];
                requiredCharacterIndex = i;
                break;
            } else {
                otherCharacterCheck = palindromicCheck(s.slice(0, s.length - i - 1) + s.slice(s.length - i));
                if (otherCharacterCheck) {
                    // requiredCharacter = s[s.length - i - 1];
                    requiredCharacterIndex = s.length - i - 1;
                    break;
                }
            }
        }
    }

    return palindromCheck ? -1 : requiredCharacterIndex;
}

function palindromicCheck(s) {
    let palindromCheck = true;
    for (var i = 0; i < s.length - 1 / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            palindromCheck = false;
        }
    }
    return palindromCheck;
}


let result = palindromeIndex("aaab");
console.log(result);
