function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let cursor = arr[i]; // Copy of current Element to be placed at correct position
        let position = i - 1;
        /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
        while (position >= 0 && arr[position] > cursor) {
            arr[position + 1] = arr[position]; // Shifting elements to somewhat temporary sorted position
            position--;
        }
        arr[position + 1] = cursor; // Placing element at correct position
    }
    return arr;
}


let result = insertionSort([3, 9, 8, 2, 10, 7, 1]);
console.log(result);