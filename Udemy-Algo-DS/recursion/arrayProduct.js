function productOfArray(array) {
    if (array.length < 1) {
        return 1;
    }

    return array[0] * productOfArray(array.slice(1, array.length))
}


console.log(productOfArray([1, 2, 3]));