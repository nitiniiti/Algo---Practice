function countSwaps(a) {

    let swapCount = 0;

    for (var i = 0; i < a.length; i++) {

        for (var j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                a[j] = [a[j + 1], a[j + 1] = a[j]][0];
                swapCount++;
            }
        }

    }

    console.log("Array is sorted in " + swapCount + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length - 1]);


}


let result = countSwaps([1, 2, 3]);
console.log(result);