function hash(string, max) {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

class HashTable {
    constructor() {
        this.storage = [];
        this.storageLimit = 10;
    }

    print() {
        console.log(this.storage);
        return this.storage;
    }

    add(key, value) {
        var index = hash(key, this.storageLimit);
        if (!this.storage[index]) {
            this.storage[index] = [[key, value]];
        }
        else {
            var inserted = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (!inserted) {
                this.storage[index].push([key, value]);
            }
        }
    };

    remove(key) {
        var index = hash(key, this.storageLimit);
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        } else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    }

    lookup(key) {
        var index = hash(key, this.storageLimit);
        if (!this.storage[index]) {
            return undefined;
        } else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1]
                }
            }
        }
    }

}


let ht = new HashTable();

ht.add("beau", "person");
ht.print();
ht.add("fido", "dog");
ht.print();
ht.add("rex", "dino");
ht.add("tux", "peng");
console.log(ht.lookup("tux"));
ht.print();