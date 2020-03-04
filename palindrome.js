function palindrome1(string) {
    string = string.split("");
    let stringArray = string.slice();
    let result1 = stringArray.reverse();
    return result1.every((element, index) => {
        return element === string[index];
    })
}

function palindrome2(string) {
    let check = true;
    for (let i = 0; i < string.length / 2 - 1; i++) {
        if (string[i] !== string[string.length - i - 1]) {
            check = false;
            break;
        }
    }
    return check;
}

function IntegerPalindrome(number) {
    // return number.toString().split("").reverse().join("") == number;

    let numberArray = number.toString().split("");

    while (numberArray.length > 1) {
        if (numberArray.pop() != numberArray.shift()) {
            return false;
        }
    }
    return true;
}

let result = palindrome1("aadaa");
console.log(result);


result = palindrome2("abacdcaba");
console.log(result);

console.log(IntegerPalindrome(-121));

