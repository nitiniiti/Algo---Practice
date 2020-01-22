let quartiles = (input) => {
    input = input.split(" ");
    input = input.sort((a, b) => {
        a = Number(a);
        b = Number(b);
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1
        } else {
            return 0
        }
    })
    let median = Number(input.length % 2 === 0 ? (Number(input[input.length / 2 - 1]) + Number(input[input.length / 2])) / 2 : Number(input[Math.round(input.length / 2) - 1]));
    let leftInput = [];
    let rightInput = [];

    input.forEach(element => {
        element = Number(element);
        if (element < median) {
            leftInput.push(element);
        } else if (element > median) {
            rightInput.push(element);
        }
    });

    let Q1 = leftInput.length % 2 === 0 ? (Number(leftInput[leftInput.length / 2 - 1]) + Number(leftInput[leftInput.length / 2])) / 2 : leftInput[Math.round(leftInput.length / 2) - 1];
    let Q3 = rightInput.length % 2 === 0 ? (Number(rightInput[rightInput.length / 2 - 1]) + Number(rightInput[rightInput.length / 2])) / 2 : rightInput[Math.round(rightInput.length / 2) - 1];

    console.log(Q1);
    console.log(median);
    console.log(Q3)
}


let result = quartiles("4 17 7 14 18 12 3 16 10 4 4 12");