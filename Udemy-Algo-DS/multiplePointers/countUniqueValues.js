function countUniqueValues(arr) {
    if (arr.length === 0)
        return 0;
    let startPointer = 0;
    let runningPointer = 1;
    let uniqueArray = [arr[0]];

    for (let i = 0; i < arr.length; i++) {
        if (arr[startPointer] == arr[runningPointer]) {
            runningPointer++;
        } else {
            if (arr[runningPointer] || arr[runningPointer] === 0) {
                uniqueArray.push(arr[runningPointer]);
            }
            startPointer = runningPointer;
            runningPointer++;
        }
    }
    return uniqueArray.length;
}


console.log(countUniqueValues([-2, -1, 0, 1]));