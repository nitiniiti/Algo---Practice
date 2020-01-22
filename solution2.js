// Write a function solution that, given an array A consisting of N integers, 
// returns the maximum sum of two numbers whose digits add up to an equal sum. 
// If there are no two numbers whose digits have an equal sum, the function should return -1.

// Examples:
// Given A = [51, 71, 17, 42], the function should return 93. There are two pairs of numbers whose digits add up to an equal sum: (51, 42) and (17, 71). The first pair sums up to 93.
// Given A = [42, 33, 60], the function should return 102. The digits of all the numbers in A add up to the same sum, and choosing to add 42 and 60 gives the result 102.
// Given A = [51, 32, 43], the function should return -1, since all numbers in A have digits that add up to different, unique sums.


function solution2(array) {

    let equalSumElementsObject = getEqualSumElements(array);
    let maxSum = 0;

    for (let key in equalSumElementsObject) {
        if (equalSumElementsObject[key].length > 1) {
            let sum = 0;
            sum = returnSum(equalSumElementsObject[key]);
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    maxSum = maxSum > 0 ? maxSum : -1
    return maxSum
}

function add(a, b) {
    return Number(a) + Number(b);
}

function returnSum(array) {
    let sortedArray = array.sort((a, b) => {
        a = Number(a)
        b = Number(b)
        if (a > b) {
            return -1;
        } else if (a < b) {
            return 1;
        } else {
            return 0;
        }
    });
    let sum = sortedArray[0] + sortedArray[1];
    return sum;
}

function getEqualSumElements(array) {
    let arraySum = {};
    array.forEach(element => {
        let sum = String(element).split('').reduce(add);
        if (!arraySum[sum]) {
            arraySum[sum] = [];
        }
        arraySum[sum].push(element);
    });
    return arraySum;
}


let result = solution2([51, 71, 17, 42]);
console.log(result);
