function largeComputation(n) {
    let sum = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i <= n; i++) {
            sum += i;
        }
        resolve(sum);
    })
};

console.log("Computation starting");

largeComputation(500).then((sum) => {
    console.log("Computation Finished", sum);
});

console.log("Computation In Progress");


