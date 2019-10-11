// Complete the luckBalance function below.
function luckBalance(k, contests) {

    let maxLuckBalance = 0;
    let importantLuck = 0;
    let loose = 0;
    contests = contests.sort((a, b) => {
        a = a[0];
        b = b[0];
        if (a > b) {
            return -1;
        } else if (b > a) {
            return 1
        } else {
            return 0
        }
    });
    contests.forEach(element => {
        if (element[1] === 1) {
            importantLuck++;
        }
    });

    contests.forEach((element) => {
        if (element[1] === 0) {
            maxLuckBalance += element[0];
        } else if (loose < k) {
            maxLuckBalance += element[0];
            loose++;
        } else {
            maxLuckBalance -= element[0];
        }
    })

    return maxLuckBalance;
}


let result = luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]);
console.log(result);