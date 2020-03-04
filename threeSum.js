var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let results = [];

    for (let i = 0; i < nums.length; i++) {

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum == 0) {
                results.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] == nums[left + 1]) {
                    left++;
                }
                left++;

                while (right > left && nums[right] == nums[right - 1]) {
                    right--;
                }
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }

        while (i < nums.length && nums[i] == nums[i + 1]) {
            i++;
        }
    }

    return results;
}


console.log(threeSum([-1, 0, 1, 2, -1, -4]));