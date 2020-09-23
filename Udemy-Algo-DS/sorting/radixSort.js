function getDigit(number, place) {
    return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) {
        return 1;
    } else {
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    }
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}


function radixSort(nums) {
    let maxDigit = mostDigits(nums);
    for (let i = 0; i < maxDigit; i++) {
        let digitBucket = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < nums.length; j++) {
            let currentDigitNumber = getDigit(nums[j], i);
            digitBucket[currentDigitNumber].push(nums[j]);
        }
        nums = [].concat(...digitBucket);
    }
    return nums;
}


console.log(radixSort([123, 24322, 2722, 62, 78, 90]));


