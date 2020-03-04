var twoSum = function (nums, target) {
    let indices = [];
    for (var i = 0; i <= nums.length - 1; i++) {
        for (var k = i + 1; k <= nums.length - 1; k++) {
            if (nums[i] + nums[k] == target) {
                if (indices.length == 0) {
                    indices.push(i);
                    indices.push(k);
                }
                break;
            }
        }
    }
    return indices;
};

console.log(twoSum([3, 2, 4], 6));