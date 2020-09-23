// Accept sorted Array and find first pair which sums to Zero

function zeroSum(arr) {
    let startPointer = 0;
    let endPointer = arr.length - 1;

    while (startPointer < endPointer) {
        let sum = arr[startPointer] + arr[endPointer];
        if (sum == 0) {
            return [arr[startPointer], arr[endPointer]];
        } else if (sum < 0) {
            startPointer++;
        } else {
            endPointer--;
        }
    }
    return false;
}


console.log(zeroSum([-3, -2, -1, 0, 1, 2, 3]));