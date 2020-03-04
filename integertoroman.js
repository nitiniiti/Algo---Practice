var list = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
var valueList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

var intToRoman = function (num) {
    var result = ''
    while (num !== 0) {
        for (var i = 0; i < valueList.length; i++) {
            if (num >= valueList[i]) {
                result += list[i]
                num -= valueList[i]
                break
            }
        }
    }
    return result
};


console.log(intToRoman(69));