// Questions
// Write a function solution that, given a string S of N lowercase English letters, returns a string with no instances of three identical consecutive letters, obtained from S by deleting the minimum possible number of letters.
// Examples:
// Given S = “eedaaad” , the function should return “eedaad” . One occurrence of letter a is deleted.
// Given S = “xxxtxxx” , the function should return “xxtxx” . Note that letter x can occur more than three times in the returned string, if the occurrences are not consecutive.
// Given S = “uuuuxaaaaxuuu” , the function should return “uuxaaxuu”.

// function solution(S) {
//     let finalString = S[0];
//     let previousCharacter = S[0];
//     let currentCharacter;
//     let instanceCount = 0;
//     for (let i = 1; i < S.length; i++) {
//         currentCharacter = S[i];
//         if (previousCharacter === currentCharacter) {
//             instanceCount++;
//             if (instanceCount < 2) {
//                 finalString = finalString + S[i]
//             }
//         } else {
//             instanceCount = 0;
//             finalString = finalString + S[i]
//         }
//         previousCharacter = currentCharacter;
//     }
//     return finalString;
// }

function solution(input) {
    var result = input.slice(0, 2);
    for (var i = 2; i < input.length; i += 1) {
        if (input[i] !== input[i - 1] || input[i] !== input[i - 2]) {
            result += input[i];
        }
    }
    return result;
}


let finalString = solution("uuuuxaaaaxuuu")
console.log(finalString)