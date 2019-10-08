function reverseWords(string) {

    let array = string.split("");

    let temp = 0;
    for (let i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }

    return array.join("");
}


let result = reverseWords("I Love JavaScript");
console.log(result);