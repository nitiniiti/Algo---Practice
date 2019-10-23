Link = "https://medium.com/@george.seif94/a-tour-of-the-top-5-sorting-algorithms-with-python-code-43ea9aa02889"

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimum = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minimum]) {
                minimum = j;
            }
        }
        arr[minimum] = [arr[i], arr[i] = arr[minimum]][0];
    }
    return arr;
}

let result = selectionSort([3, 2, 10, 1]);
console.log(result);