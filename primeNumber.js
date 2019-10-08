function primeNumber(number) {
    let primeNumbers = [2];
    for (let i = 3; i <= number; i++) {
        if (checkPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

function checkPrime(numberToCheck) {
    let isPrime = true;
    for (let i = 2; i < numberToCheck; i++) {
        if (numberToCheck % i === 0) {
            isPrime = false;
        }
    }
    return isPrime;
}



const primes = number => {
    const numbers = new Array(number + 1);
    numbers.fill(true);
    numbers[0] = numbers[1] = false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        for (let j = 2; i * j <= number; j++) numbers[i * j] = false;
    }

    return numbers.reduce(
        (primes, isPrime, prime) =>
            (isPrime ? primes.concat(prime) : primes),
        []
    );
};


let time1 = new Date().getTime();
let result = primeNumber(50000);
let time2 = new Date().getTime();
console.log("Time Taken ==", (time2 - time1) / 1000);


let time3 = new Date().getTime();
let result2 = primes(50000);
let time4 = new Date().getTime();
console.log("Time Taken ==", (time4 - time3) / 1000);
// console.log(result);