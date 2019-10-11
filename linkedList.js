class Node {
    constructor(element) {
        this.data = element;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    add(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        this.length++;
    }

    remove(element) {
        var currentNode = this.head;
        var previousNode;
        if (currentNode.data === element) {
            this.head = currentNode.next;
        } else {
            while (currentNode.data !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    }

    isEmpty() {
        return this.length === 0;
    }

    indexOf(element) {
        let currentNode = this.head;
        let index = -1;

        while (currentNode) {
            index++;
            if (currentNode.data === element) {
                return index;
            }
            currentNode = currentNode.next;
        }

        return -1;
    }

    elementAt(index) {
        let currentNode = this.head;
        var count = 0;
        while (count < index) {
            count++
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    addAt(index, element) {
        var node = new Node(element);

        let currentIndex = 0;
        let previousNode;
        let currentNode = this.head;

        if (index > this.length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++;
    }

    removeAt(index) {
        let currentIndex = 0;
        let previousNode;
        let currentNode = this.head;

        if (index < 0 || index >= this.length) {
            return false;
        }

        if (index === 0) {
            this.head = currentNode.next;
        } else {
            while (currentIndex < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
        return currentNode.data;
    }

}

var newList = new LinkedList();

newList.add("kitten1");
newList.add("kitten2");
newList.add("kitten3");
newList.add("kitten4");
newList.add("kitten5");

console.log(newList.size());
console.log(newList.removeAt(3));
console.log(newList.size());

console.log(newList.indexOf("kitten1"));