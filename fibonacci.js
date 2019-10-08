function fibonacci1(number) {
    return number < 3 ? 1 : fibonacci1(number - 1) + fibonacci1(number - 2);
}


let memoization = {};
function memoizedFibonacci(number) {
    if (memoization[number]) {
        return memoization[number];
    } else {
        memoization[number] = number < 3 ? 1 : memoizedFibonacci(number - 1) + memoizedFibonacci(number - 2);
        return memoization[number];
    }
}


let time1 = new Date().getTime();
let result1 = fibonacci1(10);
console.log(result1);
let time2 = new Date().getTime();
console.log("Time Taken ==", (time2 - time1) / 1000);


let time3 = new Date().getTime();
let result2 = memoizedFibonacci(1000);
console.log(result2);
let time4 = new Date().getTime();
console.log("Time Taken ==", (time4 - time3) / 1000);