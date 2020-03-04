var findMedianSortedArrays = function (nums1, nums2) {
    let newSortedArray = [...nums1, ...nums2].sort((a, b) => {
        return a - b;
    });

    let length = newSortedArray.length;

    return length % 2 === 0 ? (newSortedArray[length / 2 - 1] + newSortedArray[length / 2]) / 2 : newSortedArray[Math.round(length / 2) - 1];
};


console.log(findMedianSortedArrays([1, 2], [3, 4]));