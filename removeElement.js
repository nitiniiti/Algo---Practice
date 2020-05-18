var removeElement = function(nums, val) {
  let index = nums.indexOf(val);
  if (index > -1) {
    nums.splice(index, 1);
    return removeElement(nums, val);
  } else {
    return nums.length;
  }
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
