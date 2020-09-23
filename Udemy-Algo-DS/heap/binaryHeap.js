// In Binary Heap node can have atmost 2 children and children should be smaller than Parent.

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert = (data) => {
        if (this.values.length == 0) {
            this.values.push(data);
            return this.values;
        } else {
            this.values.push(data);
            let index = this.values.length - 1;
            let element = this.values[index];
            while (index > 0) {
                let parentIndex = Math.floor((index - 1) / 2);
                let parentValue = this.values[parentIndex];
                if (element <= parentValue) {
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
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();

        let index = 0;
        while (true) {
            let element = this.values[index];
            let parent1Index = 2 * index + 1;
            let parent2Index = 2 * index + 2;

            if (parent2Index < this.values.length) {
                if (element > this.values[parent1Index] && element > this.values[parent2Index]) {
                    return this.values;
                } else {
                    if (this.values[parent1Index] > this.values[parent2Index]) {
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
                return this.values;
            }
        }
    }
}

let heap = new MaxBinaryHeap();

console.log(heap.insert(55));
console.log(heap.insert(39));
console.log(heap.insert(41));
console.log(heap.insert(18));
console.log(heap.insert(27));
console.log(heap.insert(12));
console.log(heap.insert(33));

console.log(heap.extractMax());