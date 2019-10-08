class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    };
    pop() {
        if (this.count == 0) {
            return undefined
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };
    size() {
        return this.count;
    }
    peek() {
        return this.storage[this.count - 1]
    }
}

let newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);

let currentSize = newStack.size();
console.log(currentSize);

newStack.pop();

currentSize = newStack.size();
console.log(currentSize);
