// Find minimum array length with equal or more than given sum

function minSubArrayLen(nums, sum) {

    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;

    while (start < nums.length && end < nums.length) {
        if (total < sum) {
            total = total + nums[end];
            end++;
        }
        else if (total >= sum) {
            if (minLength > (end - start)) {
                minLength = (end - start);
            }
            total = total - nums[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;


}


console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
