function validAnagrams(string1, string2) {

    let charFrequency1 = {};
    let charFrequency2 = {};

    for (let i = 0; i < string1.length; i++) {
        charFrequency1[string1[i]] = (charFrequency1[string1[i]] || 0) + 1;
    }

    for (let i = 0; i < string2.length; i++) {
        charFrequency2[string2[i]] = (charFrequency2[string2[i]] || 0) + 1;
    }

    for (let key in charFrequency1) {
        if (!(key in charFrequency2)) {
            return false;
        }

        if (charFrequency1[key] !== charFrequency2[key]) {
            return false;
        }
    }

    return true;
}


console.log(validAnagrams(34, 43));