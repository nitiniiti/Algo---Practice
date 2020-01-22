function standardDeviation(input) {

    input = input.split(" ");

    let sum = input.reduce((total, number) => {
        return Number(total) + Number(number);
    })

    let mean = sum / input.length;

    let squareSum = 0;
    input.forEach(element => {
        squareSum += Math.pow(element - mean, 2);
    });

    let standardDev = Math.sqrt(squareSum / input.length);

    console.log(standardDev.toFixed(1));

}

let result = standardDeviation("10 40 30 50 20");
console.log(result);