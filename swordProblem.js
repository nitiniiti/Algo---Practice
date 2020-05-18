// Suppose 100 people are standing in circle and 1st person has sword, he kills the 2nd person and give
// sword to 3rd person and so on. So finally who will be alive


function finalPersonAlive(personsArray, skipIndex) {
    let personsLeft = [];
    skipIndex = skipIndex;
    for (let j = 0; j < personsArray.length; j++) {
        if (!skipIndex) {
            personsLeft.push(personsArray[j]);
            skipIndex = !skipIndex;
        } else {
            skipIndex = !skipIndex;
        }
    }

    console.log(personsLeft.toString());
    if (personsLeft.length === 1) {
        return personsLeft[0];
    } else {
        return finalPersonAlive(personsLeft, skipIndex)
    }

}


function intermediateFunction(numberOfPerson) {
    let personsArray = [];
    for (let i = 1; i <= numberOfPerson; i++) {
        personsArray.push(i);
    }
    return finalPersonAlive(personsArray, skipIndex = false);
}


console.log(intermediateFunction(10));


