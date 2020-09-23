function naiveStringSearch(longString, shortString) {
    for (let i = 0; i < longString.length; i++) {
        if (longString[i] === shortString[0]) {
            let match = true;
            for (let j = 1; j < shortString.length; j++) {
                if (shortString[j] !== longString[i + j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
    }

    return false;
}


console.log(naiveStringSearch('thanksssnhsgsvtesfvsh', 'nhsgs'));