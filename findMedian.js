// Complete the findMedian function below.
function findMedian(array) {
    array = array.sort((a, b) => {
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
    let median = array.length % 2 === 0 ? (array[array.length / 2 - 1] + array[array.length / 2]) / 2 : array[Math.round(array.length / 2) - 1];
    return median;
}


let result = findMedian([0, 1, 2, 4, 6, 5, 3]);
console.log(result);