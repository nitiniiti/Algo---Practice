// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(n, arr) {
    let minimumDifference;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (!minimumDifference) {
                minimumDifference = Math.abs(arr[i] - arr[j]);
            }
            if (Math.abs(arr[i] - arr[j]) < minimumDifference) {
                minimumDifference = Math.abs(arr[i] - arr[j]);
            }
        }
    }
    return minimumDifference;
}

function minimumAbsoluteDifference2(arr) {
    let minimumDifference;
    let n = arr.length;
    arr.sort((a, b) => {
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
    for (let i = 0; i < n - 1; i++) {
        if (!minimumDifference) {
            minimumDifference = Math.abs(arr[i] - arr[i + 1]);
        }
        if (Math.abs(arr[i] - arr[i + 1]) < minimumDifference) {
            minimumDifference = Math.abs(arr[i] - arr[i + 1]);
        }
    }
    return minimumDifference;
}
let result = minimumAbsoluteDifference2([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]);
console.log(result);