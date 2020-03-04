var threeSumClosest = function (nums, target) {
    let closest = Infinity;
    let sumClosest;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        left = i + 1;
        right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            let currentClosest = Math.abs(sum - target);
            if (currentClosest < closest) {
                closest = currentClosest;
                sumClosest = sum;
            }
            if (sum > target) {
                right--
            } else {
                left++
            }
        }
    }
    return sumClosest;
};


console.log(threeSumClosest([-1, 2, 1, -4], 1));