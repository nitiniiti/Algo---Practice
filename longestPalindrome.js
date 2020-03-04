var longestPalindrome = function (s) {
    let longestPalindromeCheck = 0;
    let longestPalindromeString = "";
    let checkString = "";
    for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j <= s.length; j++) {
            checkString = s.substring(i, j);
            if (checkString[0] === checkString[checkString.length - 1]) {
                let longestPalindromeCheckStaus = checkString.split("").reverse().join("") == checkString;

                if (longestPalindromeCheckStaus) {
                    checkStringLength = checkString.length;
                    if (longestPalindromeCheck < checkStringLength) {
                        longestPalindromeCheck = checkStringLength;
                        longestPalindromeString = checkString;
                    }
                }
            }
        }
    }
    return longestPalindromeString;
};

function palindromeCheck(s) {
    let palindromCheck = true;
    for (var i = 0; i < s.length - 1 / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            palindromCheck = false;
        }
    }
    return palindromCheck;
}


console.log(longestPalindrome("abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa"));