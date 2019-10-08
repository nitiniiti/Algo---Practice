function capitalization(string) {
    let stringSubArray = string.split(" ");

    stringSubArray.forEach(element => {
        element[0] = element[0].toUpperCase();
    });

    let finalString = stringSubArray.join(" ");
    return finalString;
}


let result = capitalization("hello world");
console.log(result);