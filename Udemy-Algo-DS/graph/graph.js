// Adjacent List Implementation 

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex = (v1) => {
        if (!this.adjacencyList[v1]) {
            this.adjacencyList[v1] = [];
        }
        return;
    }

    addEdge = (v1, v2) => {
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1].push(v2);
        }

        if (this.adjacencyList[v2]) {
            this.adjacencyList[v2].push(v1);
        }
        return;
    }

    removeEdge = (v1, v2) => {
        if (this.adjacencyList[v1]) {
            let index = this.adjacencyList[v1].indexOf(v2);
            this.adjacencyList[v1] = this.adjacencyList[v1].filter((element) => {
                return element != v2;
            })
        }

        if (this.adjacencyList[v2]) {
            this.adjacencyList[v2] = this.adjacencyList[v2].filter((element) => {
                return element != v1;
            })
        }
        return;
    }

    removeVertex = (v1) => {
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1].forEach((element) => {
                if (this.adjacencyList[element]) {
                    this.adjacencyList[element] = this.adjacencyList[element].filter((element2) => {
                        return element2 != v1;
                    })
                }
            });
            delete this.adjacencyList[v1];
        }
        return;
    }

    DFS = (v1) => {
        let result = [];
        let visitedNode = {};
        let recursiveDFS = (v1) => {
            if (!v1) {
                return;
            }
            if (!visitedNode[v1]) {
                visitedNode[v1] = true;
                result.push(v1);
            } else {
                return;
            }
            if (this.adjacencyList[v1].length > 0) {
                this.adjacencyList[v1].forEach((element) => {
                    recursiveDFS(element);
                })
            } else {
                return;
            }
        }
        recursiveDFS(v1);
        return result;
    }

    BFS = (v1) => {
        let result = [v1];
        let visitedNodes = {};

        let recursiveBFS = (v1) => {
            if (!v1) {
                return;
            }
            if (!visitedNodes[v1]) {
                visitedNodes[v1] = true;
            } else {
                return;
            }
            if (this.adjacencyList[v1].length > 0) {
                this.adjacencyList[v1].forEach((element) => {
                    if (result.indexOf(element) === -1) {
                        result.push(element);
                    }
                });
                this.adjacencyList[v1].forEach((element) => {
                    recursiveBFS(element);
                });
            } else {
                return;
            }
        }

        recursiveBFS(v1);
        return result;
    }
}


let newGraph = new Graph();
// newGraph.addVertex("Delhi");
// newGraph.addVertex("Mumbai");
// newGraph.addVertex("Chennai");
// newGraph.addVertex("Kolkata");

// newGraph.addEdge("Delhi", "Mumbai");
// newGraph.addEdge("Delhi", "Chennai");
// newGraph.addEdge("Delhi", "Kolkata");
// newGraph.addEdge("Kolkata", "Mumbai");

// newGraph.removeEdge("Delhi", "Mumbai");

// newGraph.removeVertex("Kolkata");
// console.log(newGraph);

newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");

newGraph.addEdge("A", "B");
newGraph.addEdge("A", "C");
newGraph.addEdge("B", "D");
newGraph.addEdge("C", "E");
newGraph.addEdge("D", "E");
newGraph.addEdge("D", "F");
newGraph.addEdge("E", "F");

console.log(newGraph.DFS("A"));
console.log(newGraph.BFS("A"));
console.log(newGraph);