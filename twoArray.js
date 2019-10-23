// Complete the twoArrays function below.
function twoArrays(k, A, B) {

    let possibility = true;
    A = A.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1
        } else {
            return 0
        }
    });

    B = B.sort((a, b) => {
        if (a > b) {
            return -1;
        } else if (b > a) {
            return 1
        } else {
            return 0
        }
    });

    A.forEach((element, index) => {
        if (element + B[index] < k) {
            possibility = false;
        }
    });

    return possibility ? "YES" : "NO"

}


let result = twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]);
console.log(result);