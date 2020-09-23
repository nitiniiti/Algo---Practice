// Check if two arrays have same frequenecy, where in first arrray we have numbers and in second array we have squares

function same(arr1, arr2) {
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    arr1.forEach((element) => {
        frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1;
    });

    arr2.forEach((element) => {
        frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1;
    });


    for (let key in frequencyCounter1) {
        if (!(key * key in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter1[key] !== frequencyCounter2[key * key]) {
            return false
        }
    }

    return true;

}


console.log(same([1, 2, 3, 4], [9, 16, 1, 4]));