function stringReversal1(string) {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
        result = result + string[i];
    }
    return result;
}

function stringReversal2(string) {
    let result = string.split("").reverse().join("");
    return result;
}

let result = stringReversal1("adsjiedsksk");
console.log(result);

result = stringReversal2("adsjiedsksk");
console.log(result);