Link = "https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060"

mergeSort = (arr) => {

    // No need to sort the array if the array only has one element or empty
    if (arr.length <= 1) {
        return arr;
    }

    // In order to divide the array in half, we need to figure out the middle
    let middle = Math.floor(arr.length / 2);

    // This is where we will be dividing the array into left and right
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);


    return merge(mergeSort(left), mergeSort(right));

}

merge = (left, right) => {

    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let inversions = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
        inversions++;
    }
    // console.log(inversions);

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}


let result = mergeSort([2, 4, 1]);
console.log(result);