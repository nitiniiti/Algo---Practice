var myAtoi = function (str) {
    const min = -2147483648
    const max = 2147483647
    const match = str.match(/^ *([+-]?[0-9]+)/)

    if (match) {
        const integer = Number(match[1])
        if (integer > max) {
            return max
        }
        if (integer < min) {
            return min
        }
        return integer
    }
    return 0

};


console.log(myAtoi());