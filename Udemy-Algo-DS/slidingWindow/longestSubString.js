// Find longest substring with unique characters

function findLongestSubstring(string) {
    let substring = '';
    let maxSubString = 0;

    for (let i = 0; i < string.length; i++) {
        let index = substring.indexOf(string[i]);
        if (index > -1) {
            substring = substring.substr(index + 1) + string[i];
        } else {
            substring = substring + string[i];
            if (substring.length > maxSubString) {
                maxSubString = substring.length;
            }
        }
    }

    return maxSubString;

}


console.log(findLongestSubstring('longestsubstring'));