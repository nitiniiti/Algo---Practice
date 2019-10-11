function pickingNumbers(input) {
    // Write your code here
    let subArrayObject = {
        0: []
    };
    input = input.sort((a, b) => {
        a = Number(a);
        b = Number(b);
        if (a > b) {
            return 1
        } else if (b > 1) {
            return -1
        } else {
            return 0
        }
    })
    let subArrayCount = 0;
    input.forEach(element => {
        let inserted = false;
        for (var arrayObject in subArrayObject) {
            let shouldBeInserted = true;
            subArrayObject[arrayObject].forEach((insideElement) => {
                if (Math.abs(insideElement - element) > 1) {
                    shouldBeInserted = false;
                }
            });
            if (shouldBeInserted) {
                subArrayObject[arrayObject].push(element);
                inserted = true;
            }
        }
        if (!inserted) {
            subArrayCount++;
            subArrayObject[subArrayCount] = [element]
        }
    });

    let longestArray = 0;
    for (var i in subArrayObject) {
        if (subArrayObject[i].length > longestArray) {
            longestArray = subArrayObject[i].length;
        }
    }

    return longestArray;
}


// let result = pickingNumbers([4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9, 2, 4]);

let result = pickingNumbers([4, 6, 5, 3, 3, 1])
console.log(result);