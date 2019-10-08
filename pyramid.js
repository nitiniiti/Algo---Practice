function pyramid(number) {
    let pyramid = "";
    for (let i = 1; i <= number; i++) {
        let string = "";
        for (let j = 1; j <= (2 * i + 1); j++) {
            if (j == 1 || j == (2 * i + 1)) {
                string = string + " ";
            } else {
                string = string + "#";
            }
        }
        string = string + "\n";
        pyramid = pyramid + string;
    }
    return pyramid;
}

let result = pyramid(3);
console.log(result);