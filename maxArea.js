var maxArea = function (height) {
    let maxArea = 0;
    let currentArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < height.length; j++) {
            currentArea = Math.min(height[i], height[j]) * Math.abs(i - j);
            if (currentArea > maxArea) {
                maxArea = currentArea;
            }
        }
    }
    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));