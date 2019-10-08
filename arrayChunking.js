function arrayChunking(array, size) {
    let chunks = [];
    let index = 0;

    while (index < array.length) {
        chunks.push(array.slice(index, size + index));
        index += size;
    }

    return chunks;
}


let result = arrayChunking([1, 2, 3, 4, 5, 6, 7, 8, 8, 9], 3);
console.log(result);