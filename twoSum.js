const twoSum = (array, sum) => {
    let store = [];
    let pairs = [];

    array.forEach(part1 => {
        let part2 = sum - part1;
        if (store.indexOf(part2) > -1) {
            pairs.push([part1, part2]);
        }
        store.push(part1);
    });

    return pairs;
};


const twoSum2 = (array, sum) => {
    let pairs = [];
    array.forEach((part1, index1) => {
        for (let i = index1 + 1; i < array.length; i++) {
            if (array[i] + part1 == sum) {
                pairs.push([part1, array[i]]);
            }
        }
    })
    return pairs;
}


let result = twoSum([1, 2, 2, 2, 3, 4], 4);
console.log(result);

result = twoSum2([1, 2, 2, 2, 3, 4], 4);
console.log(result);