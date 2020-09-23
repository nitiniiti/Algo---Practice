function fib(number) {
    if (number <= 2) {
        return 1;
    }
    return fib(number - 2) + fib(number - 1);
}


console.log(fib(4));