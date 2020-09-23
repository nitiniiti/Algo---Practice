function solve(s) {
    //  console.log(typeof s);
    //if(typeof s == string){
    console.log(s);
    let palindromeString = '';
    for (let i = 0; i < s.length; i++) {
        palindromeString = palindromeString + s[i];
        if (!checkPalindrome(palindromeString)) {
            palindromeString = palindromeString.substring(0, palindromeString.length - 1);
        }
    }
    return palindromeString;
    // }
}


function checkPalindrome(s) {
    let palindromeStatus = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] != s[s.length - i - 1]) {
            palindromeStatus = false;
            break;
        }
    }
    return palindromeStatus;
}


solve('adskassda');