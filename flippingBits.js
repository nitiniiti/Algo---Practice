// Complete the flippingBits function below.
function flippingBits(N) {
    let binary = Number(N).toString(2);

    while (binary.length < 32) {
        binary = '0' + binary;
    }

    let newBinary = "";
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            newBinary += "0";
        } else {
            newBinary += "1";
        }
    }
    let decimal = parseInt(newBinary, 2)
    return decimal;
}



let result = flippingBits(2147483647);
console.log(flippingBits);