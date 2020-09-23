// Accept a number and adds up all the number from 0 to the number

function recursiveRange(number) {
    if (number < 0) {
        return 0;
    }
    return number + recursiveRange(number - 1);
}


console.log(recursiveRange(5));
