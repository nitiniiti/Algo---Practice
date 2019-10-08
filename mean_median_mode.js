function Mean_Median_Mode(array) {
    array = array.sort(function (a, b) {
        a = Number(a);
        b = Number(b);
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0
        }
    });

    let sum = 0;
    let mean = 0;
    let mode = 0;
    let median = 0;
    let arrayObject = {};

    array.forEach(element => {
        sum = sum + element;
        if (arrayObject[element]) {
            ++arrayObject[element];
        } else {
            arrayObject[element] = 1;
        }
    });

    for (var number in arrayObject) {
        if (arrayObject[number] > mode) {
            mode = number;
        }
    }

    mean = sum / array.length;
    median = array.length % 2 === 0 ? (array[array.length / 2 - 1] + array[array.length / 2]) / 2 : array[Math.round(array.length / 2) - 1];
    mode = mode;


    return { mean, median, mode }

}


let result = Mean_Median_Mode([1, 1, 2, 2, 3, 3, 4, 4]);
console.log(result);