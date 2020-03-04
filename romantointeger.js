var list = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
var valueList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

var romanToInt = function (s) {
    let currentRomanNumber = "";
    let IntegerValue = 0;
    while (s.length > 0) {
        currentRomanNumber = s.substring(0, 2);
        let index = list.indexOf(currentRomanNumber);
        if (index >= 0) {
            IntegerValue += valueList[index];
            s = s.substring(2, s.length)
        } else {
            currentRomanNumber = s.substring(0, 1);
            let newIndex = list.indexOf(currentRomanNumber);
            IntegerValue += valueList[newIndex];
            s = s.substring(1, s.length)
        }
    }
    return IntegerValue;
};


console.log(romanToInt("MCMXCIV"));