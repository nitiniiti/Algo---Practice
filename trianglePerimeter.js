// Complete the maximumPerimeterTriangle function below.
function maximumPerimeterTriangle(sticks) {

    sticks = sticks.sort();

    let i = sticks.length - 3;
    while (i > 0 && (sticks[i] + sticks[i + 1]) <= sticks[i + 2]) {
        i -= 1;
    }

    if (i > 0) {
        return [sticks[i], sticks[i + 1], sticks[i + 2]];
    } else {
        return -1
    }

}


let result = maximumPerimeterTriangle([1, 1, 1, 2, 3, 5]);
console.log(result);