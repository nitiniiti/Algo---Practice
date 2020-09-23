// Check if any pair exist with target average value

function averagePair(arr, average) {
    let startPointer = 0;
    let endPointer = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        if ((arr[startPointer] + arr[endPointer]) / 2 === average) {
            return true;
        } else if ((arr[startPointer] + arr[endPointer]) / 2 > average) {
            endPointer--;
        } else {
            startPointer++;
        }
    }

    return false;
}


console.log(averagePair([1, 2, 3, 4, 5], 3));