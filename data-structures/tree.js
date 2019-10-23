class Node {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.children = [];
    }
}

class Tree {
    constructor(value) {
        var node = new Node(value);
        this.root = node;
    }

    traverseDf(callback) {
        // this is a recurse and immediately-invoking function 
        (function recurse(currentNode) {
            // step 2
            for (var i = 0, length = currentNode.children.length; i < length; i++) {
                // step 3
                recurse(currentNode.children[i]);
            }

            // step 4
            callback(currentNode);

            // step 1
        })(this.root);
    }
}


var tree = new Tree('one');

tree.root.children.push(new Node('two'));
tree.root.children[0].parent = tree;

tree.root.children.push(new Node('three'));
tree.root.children[1].parent = tree;

tree.root.children.push(new Node('four'));
tree.root.children[2].parent = tree;

tree.root.children[0].children.push(new Node('five'));
tree.root.children[0].children[0].parent = tree.root.children[0];

tree.root.children[0].children.push(new Node('six'));
tree.root.children[0].children[1].parent = tree.root.children[0];

tree.root.children[2].children.push(new Node('seven'));
tree.root.children[2].children[0].parent = tree.root.children[2];

tree.traverseDf(function (tree) {
    console.log(tree.value)
});