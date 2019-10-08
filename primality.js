// Complete the primality function below.
function primality(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) {
            return "Not prime"
        }
    }

    if (n > 1) {
        return "Prime";
    } else {
        return "Not prime"
    }
}



let result = primality(1);
console.log(result);
