class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class SinglyList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    addNode(value) {
        let node = new Node(value);
        let currentNode = this.head;

        if (!currentNode) {
            // Empty List Case
            this.head = node;
            this.length++;

            return node;
        } else {

            // Non-Empty List Case
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
            this.length++;

            return node;
        }
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

        if (position <= 0 || position > length) {
            console.log('position out of bound');
        }
        else if (position === 1) {
            this.head = currentNode.next;
            deletedNode = currentNode;
            this.length--;

            return deletedNode;

        } else {
            // Through this iteration will reach to the nodeBeforeToDelete, can be taken care by count initialisation 
            while (count < position) {
                beforeNodeToDelete = currentNode;
                currentNode = currentNode.next;
                count++;
            }

            nodeToDelete = beforeNodeToDelete.next;
            beforeNodeToDelete.next = nodeToDelete.next;

            deletedNode = nodeToDelete;
            nodeToDelete = null;
            this.length--;

            return deletedNode;
        }
    }
}

let list = new SinglyList();

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);

let removedNode = list.removeNode(3);
console.log(removedNode);

let searchedNode = list.searchNode(3);
console.log(searchedNode);
