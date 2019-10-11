// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
    arr = arr.sort((a, b) => {
        a = Number(a);
        b = Number(b);
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1
        } else {
            return 0
        }
    });

    brr = brr.sort((a, b) => {
        a = Number(a);
        b = Number(b);
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1
        } else {
            return 0
        }
    })

    let Bindex = 0;
    let Aindex = 0;
    let missingNumbersArray = [];

    while (Bindex < brr.length) {
        if (arr[Aindex] === brr[Bindex]) {
            Aindex++;
            Bindex++;
        } else {
            if (missingNumbersArray.indexOf(brr[Bindex]) === -1)
                missingNumbersArray.push(brr[Bindex]);
            Bindex++;
        }
    }

    missingNumbersArray.sort((a, b) => {
        a = Number(a);
        b = Number(b);
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1
        } else {
            return 0
        }
    });

    return missingNumbersArray;

}



let result = missingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206], [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]);
console.log(result);