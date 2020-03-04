var reverse = function (x) {
    let numberString = String(x);
    let negativeNumber = false;
    if (numberString[0] === "-") {
        numberString = numberString.substr(1, numberString.length - 1);
        negativeNumber = true;
    }
    let finalNumber = Number(numberString.split("").reverse().join(""));

    if (finalNumber > 2147483647 || finalNumber < -2147483648) {
        return 0
    } else {
        return negativeNumber ? -1 * finalNumber : finalNumber
    }
};

console.log(reverse(1534236469));