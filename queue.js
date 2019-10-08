class Queue {
    constructor() {
        this.collection = [];
    }

    enqueue(value) {
        this.collection.push(value);
    }

    dequeue() {
        this.collection.shift();
    }

    size() {
        return this.collection.length;
    }
}


let myqueue = new Queue();

myqueue.enqueue(1);
myqueue.enqueue(2);
myqueue.enqueue(3);
myqueue.enqueue(4);

console.log(myqueue.size());

myqueue.dequeue();
myqueue.dequeue();

console.log(myqueue.size());

