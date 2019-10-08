function fizzBuzz(number) {
    let output = [];
    while (number > 0) {
        if (number % 6 === 0) output.push("Fizz Buzz");
        else if (number % 2 === 0) output.push("Fizz");
        else if (number % 3 === 0) output.push("Buzz");
        else output.push(number);
        number--;
    }
    return output;
}

let result = fizzBuzz(10);
console.log(result);