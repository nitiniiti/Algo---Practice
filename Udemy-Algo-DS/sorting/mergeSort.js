function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middleElement = Math.floor(arr.length / 2)

    let left = arr.slice(0, middleElement);
    let right = arr.slice(middleElement);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
    let finalArray = [];
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;

    while (leftArrayIndex < leftArr.length && rightArrayIndex < rightArr.length) {
        if (Number(leftArr[leftArrayIndex]) < Number(rightArr[rightArrayIndex])) {
            finalArray.push(leftArr[leftArrayIndex]);
            leftArrayIndex++;
        } else {
            finalArray.push(rightArr[rightArrayIndex]);
            rightArrayIndex++;
        }
    }

    while (leftArrayIndex < leftArr.length) {
        finalArray.push(leftArr[leftArrayIndex]);
        leftArrayIndex++;
    }

    while (rightArrayIndex < rightArr.length) {
        finalArray.push(rightArr[rightArrayIndex]);
        rightArrayIndex++;
    }

    return finalArray;
}


console.log(mergeSort([2, 3, 3, 5, 7, 1, 2, 10, 9, 5, 1]));