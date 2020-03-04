var lengthOfLongestSubstring = function (s) {
    let longestString = [];
    let longestStringLength = 0;
    let currentStringLength = 0;


    for (let j = 0; j < s.length; j++) {
        let index = longestString.indexOf(s[j]);
        if (index == -1) {
            longestString.push(s[j]);
            currentStringLength++;
            if (currentStringLength >= longestStringLength) {
                longestStringLength = currentStringLength;
            }
        } else {
            longestString = longestString.slice(index + 1);
            longestString.push(s[j]);
            currentStringLength = longestString.length;
        }
    }

    return longestStringLength;
};


console.log(lengthOfLongestSubstring("abcabcbb"));