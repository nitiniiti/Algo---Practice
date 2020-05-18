let combinations = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
}
let requiredCombinations = [];
let finalCombination = [];
var letterCombinations = function (digits) {
    if (!digits) {
        return [];
    } else if (digits.length == 1) {
        return combinations[Number(digits)]
    }
    digits.split("").forEach(element => {
        requiredCombinations.push(combinations[Number(element)]);
    });
    for (let i = 0; i < requiredCombinations.length; i++) {
        requiredCombinations[i].forEach((character1) => {
            let j = i + 1;
            while (j < requiredCombinations.length) {
                requiredCombinations[j].forEach((character2) => {
                    finalCombination.push(character1.concat(character2));
                });
                j++;
            }
        })
    }
    return finalCombination;
};


console.log(letterCombinations("22"));