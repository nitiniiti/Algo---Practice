function interQuartileRange(input1, input2) {

    input1 = input1.split(" ");
    input2 = input2.split(" ");
    let input = [];

    input2.forEach((element, index) => {
        while (element > 0) {
            input.push(Number(input1[index]));
            element--;
        }
    });

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

    console.log(Q3 - Q1);

}


let result = interQuartileRange("10 40 30 50 20 10 40 30 50 20 1 2 3 4 5 6 7 8 9 10", "1 2 3 4 5 6 7 8 9 10 10 40 30 50 20 10 40 30 50 20");
