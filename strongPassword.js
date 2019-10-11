function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";
    const minimumLength = 6;

    let numbersCheck = true;
    let lower_caseCheck = true;
    let upper_caseCheck = true;
    let special_charactersCheck = true;
    let minimumLengthCheck = true;

    let charactersRequired = 4;

    for (let i = 0; i < n; i++) {
        if (numbersCheck && numbers.indexOf(password[i]) > -1) {
            charactersRequired--;
            numbersCheck = false;
        }
        if (lower_caseCheck && lower_case.indexOf(password[i]) > -1) {
            charactersRequired--;
            lower_caseCheck = false;
        }
        if (upper_caseCheck && upper_case.indexOf(password[i]) > -1) {
            charactersRequired--;
            upper_caseCheck = false;
        }
        if (special_charactersCheck && special_characters.indexOf(password[i]) > -1) {
            charactersRequired--;
            special_charactersCheck = false;
        }
    }

    if ((minimumLength > n) && (minimumLength - n) > charactersRequired) {
        charactersRequired = minimumLength - n;
    }

    return charactersRequired;

}


let result = minimumNumber(11, "#HackerRank");
console.log(result);