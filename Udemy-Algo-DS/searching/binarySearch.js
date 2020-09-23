// This only works on sorted Array

function binarySearch(arr, number) {
    let start = 0;
    let end = arr.length - 1;

    function binarySearchInside(arr, start, end, number) {
        if (number > arr[end] || number < arr[start]) {
            return -1;
        }
        let middleElement = Math.floor((end + start) / 2);
        if (arr[middleElement] === number) {
            return middleElement;
        }
        if (arr[middleElement + 1] === number) {
            return (middleElement + 1);
        }
        if (number > arr[middleElement]) {
            return binarySearchInside(arr, middleElement, end, number);
        } else if (number < arr[middleElement]) {
            return binarySearchInside(arr, start, middleElement, number);
        }
    }

    return binarySearchInside(arr, start, end, number);
}


console.log(binarySearch([1, 2, 3, 4, 5, 7, 79], 5));
