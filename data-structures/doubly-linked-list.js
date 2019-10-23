class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    addNode(value) {
        var node = new Node(value);

        if (this.length) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }

        this.length++;

        return node;
    }

    searchNode(position) {
        var currentNode = this.head;
        var length = this.length;
        var count = 1;

        if (length === 0 || position < 1 || position > length) {
            // When Element doesn't Exist
            console.log('Element Does not exist');
        } else {
            // When Element Exist
            while (count < position) {
                currentNode = currentNode.next;
                count++;
            }

            return currentNode;
        }
    }

    removeNode(position) {
        var currentNode = this.head;
        var length = this.length;
        var count = 1;
        var beforeNodeToDelete = null;
        var nodeToDelete = null;
        var deletedNode = null;

        // 1st use-case: an invalid position
        if (length === 0 || position < 1 || position > length) {
            throw new Error(message.failure);
        }

        // 2nd use-case: the first node is need to remove
        if (position === 1) {
            this.head = currentNode.next;

            if (this.head) {
                // 2nd use-case: there is a second node
                this.head.previous = null;
            } else {
                // 2nd use-case: there is no second node
                this.tail = null;
            }

        } else if (position === this.length) {
            // 3rd use-case: the last node is removed
            this.tail = this.tail.previous;
            this.tail.next = null;
        } else {
            // 4th use-case: a middle node is removed
            while (count < position) {
                currentNode = currentNode.next;
                count++;
            }

            beforeNodeToDelete = currentNode.previous;
            nodeToDelete = currentNode;
            afterNodeToDelete = currentNode.next;

            beforeNodeToDelete.next = afterNodeToDelete;
            afterNodeToDelete.previous = beforeNodeToDelete;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
        }

        this._length--;

        return message.success;
    }
}