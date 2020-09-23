// function fibonacci(number) {
//     if (number <= 2) {
//         return 1;
//     }
//     return fibonacci(number - 1) + fibonacci(number - 2);
// }

// let calculatedData = {};
function memoizedFibonacci(number, calculatedData = {}) {
    if (calculatedData[number]) {
        return calculatedData[number];
    }

    if (number <= 2) {
        return 1;
    }
    calculatedData[number] = memoizedFibonacci(number - 1, calculatedData) + memoizedFibonacci(number - 2, calculatedData);
    return calculatedData[number];
}

console.log(memoizedFibonacci(100));