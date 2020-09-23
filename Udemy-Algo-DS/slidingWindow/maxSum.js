function maxSum(arr, number) {
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < number; i++) {
        tempSum = tempSum + arr[i];
    }
    for (let i = number; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - number];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}



console.log(maxSum([3, 4, 5, 6, 8, 3, 5, 5, 9, 3], 3));