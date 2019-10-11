// Complete the anagram function below.
function anagram(s) {

    let changesRequired = 0;
    let stringLength = s.length;
    if (stringLength % 2 !== 0) {
        return -1
    } else {
        let string1 = s.slice(0, stringLength / 2);
        let string2 = s.slice(stringLength / 2);

        for (let i = 0; i < string1.length; i++) {
            let index = string2.indexOf(string1[i]);
            if (index > -1) {
                string2 = string2.slice(0, index) + string2.slice(index + 1)
            } else {
                changesRequired++;
            }
        }
    }

    return changesRequired;
}



let result = anagram("xyyx");
console.log(result);