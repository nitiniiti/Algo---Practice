function maximumToys(prices, k) {

    prices.sort((a, b) => {
        if (a > b) {
            return 1
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    });

    let numberOfToys = 0;

    prices.forEach(element => {
        if (k >= element) {
            numberOfToys++;
            k -= element;
        }
    });

    return numberOfToys;

}


let result = maximumToys([1, 12, 5, 111, 200, 1000, 10], 50);
console.log(result);