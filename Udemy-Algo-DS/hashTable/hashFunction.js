// Separate Chaining - Keep multiple key-value pair at the same index when collision happen
// Linear Probing - When collision happens search for next empty slot keep the key-value at that index.

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }


    _hash = (key) => {
        let total = 0;
        let weird_prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * weird_prime + value) % this.keyMap.length;
        }
        return total;
    }

    set = (key, value) => {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        return;
    }

    get = (key) => {
        let index = this._hash(key);
        if (this.keyMap[index].length == 0) {
            return "Not Found";
        } else if (this.keyMap[index].length == 1) {
            return this.keyMap[index][0][1];
        } else {
            this.keyMap[index].forEach(element => {
                if (element[0] === key) {
                    return element[1];
                }
            });
        }
        return "Not Found";
    }
}


let hashTable = new HashTable();

hashTable.set("father", "son");
hashTable.set("mother", "daughter");
console.log(hashTable.get("father"));
console.log(hashTable.get("mother"));