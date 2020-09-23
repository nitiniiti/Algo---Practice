// Priority Queues using Heap

class Node {
    constructor(data, priority) {
        this.value = data;
        this.priority = priority;
    }
}


class PriorityQueue {
    constructor() {
        this.values = [];
    }

    insert = (data, priority) => {
        if (this.values.length == 0) {
            let node = new Node(data, priority);
            this.values.push(node);
            return this.values;
        } else {
            let node = new Node(data, priority);
            this.values.push(node);
            let index = this.values.length - 1;
            let element = this.values[index];
            while (index > 0) {
                let parentIndex = Math.floor((index - 1) / 2);
                let parentValue = this.values[parentIndex];
                if (element.priority >= parentValue.priority) {
                    break;
                } else {
                    this.values[parentIndex] = element;
                    this.values[index] = parentValue;
                    index = parentIndex;
                }
            }
            return this.values;
        }
    }

    extractMax = () => {
        let result = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();

        let index = 0;
        while (true) {
            let element = this.values[index];
            let parent1Index = 2 * index + 1;
            let parent2Index = 2 * index + 2;

            if (parent2Index < this.values.length) {
                if (element.priority < this.values[parent1Index].priority && element < this.values[parent2Index].priority) {
                    return result;
                } else {
                    if (this.values[parent1Index].priority < this.values[parent2Index].priority) {
                        this.values[index] = this.values[parent1Index];
                        this.values[parent1Index] = element;
                        index = parent1Index;
                    } else {
                        this.values[index] = this.values[parent2Index];
                        this.values[parent2Index] = element;
                        index = parent2Index;
                    }
                }
            } else {
                return result;
            }
        }
    }
}

let priority = new PriorityQueue();

console.log(priority.insert("fever", 5));
console.log(priority.insert("accident", 1));
console.log(priority.insert("headache", 4));
console.log(priority.insert("accident2", 2));
console.log(priority.insert("headache3", 3));

console.log(priority.extractMax());
console.log(priority.extractMax());
console.log(priority.extractMax());
console.log(priority.extractMax());
console.log(priority.extractMax());

