class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert = (data) => {
        const node = new Node(data);
        if (!this.root) {
            this.root = node;
            return;
        } else {
            let current = this.root;
            while (true) {
                if (data < current.data) {
                    if (!current.left) {
                        current.left = node;
                        return;
                    } else {
                        current = current.left;
                    }
                } else if (data > current.data) {
                    if (!current.right) {
                        current.right = node;
                        return;
                    } else {
                        current = current.right;
                    }
                } else {
                    return;
                }
            }
        }
    }

    find = (data) => {
        if (!this.root) {
            return false;
        } else {
            let current = this.root;
            while (true) {
                if (current.data == data) {
                    return true;
                } else if (data > current.data) {
                    if (current.right) {
                        current = current.right;
                    } else {
                        return false;
                    }
                } else {
                    if (current.left) {
                        current = current.left;
                    } else {
                        return false;
                    }
                }
            }
        }
    }

    BFS = () => {
        if (!this.root) {
            return [];
        } else {
            let treeArray = [this.root];
            let result = [];

            while (treeArray.length > 0) {
                if (treeArray[0].left) {
                    treeArray.push(treeArray[0].left);
                }
                if (treeArray[0].right) {
                    treeArray.push(treeArray[0].right);
                }
                result.push(treeArray.shift().data);
            }
            return result;
        }
    }

    DFS = () => {
        if (!this.root) {
            return [];
        } else {
            let treeArray = [this.root];
            let result = [];

            while (treeArray.length > 0) {
                let currentElement = treeArray.shift();
                result.push(currentElement.data);
                if (currentElement.right) {
                    treeArray.unshift(currentElement.right);
                }
                if (currentElement.left) {
                    treeArray.unshift(currentElement.left);
                }
            }
            return result;
        }
    }
}


let bst = new BinarySearchTree();
bst.insert(10);
console.log(bst);
bst.insert(6);
console.log(bst);
bst.insert(15);
console.log(bst);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst);
console.log(bst.find(7));
console.log(bst.find(11));
console.log(bst.find(5));
console.log("BFS==================>", bst.BFS());
console.log("DFS==================>", bst.DFS());


