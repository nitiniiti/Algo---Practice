function reverseArray(array) {
    let temp = 0;
    for (let i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }

    return array;
}


let result = reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 7, 8, 9]);
console.log(result);