function staircase(number) {
    let staircase = "";
    for (let i = 1; i <= number; i++) {
        let stair = "";
        for (let j = 1; j <= i; j++) {
            stair = stair + "#";
        }
        stair += "\n";
        staircase += stair;
    }
    return staircase;
}


let result = staircase(10);
console.log(result);