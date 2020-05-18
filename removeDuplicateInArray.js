var removeDuplicates = function(nums) {
  for (let i = 1; i <= nums.length - 1; i++) {
    if (nums[i - 1] != undefined && nums[i - 1] == nums[i]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
