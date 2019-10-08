function integerReversal(integer) {
    return Number(integer.toString().split("").reverse().join(""))
}

let result = integerReversal(123456789);
console.log(result);