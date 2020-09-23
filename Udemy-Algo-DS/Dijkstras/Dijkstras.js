// Shortest Path Algorithm
let PriorityQueue = require("./priorityQueue");

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex = (v1) => {
        if (!this.adjacencyList[v1]) {
            this.adjacencyList[v1] = [];
        }
        return;
    }

    addEdge = (v1, v2, weight) => {
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1].push({ node: v2, weight: weight });
        }

        if (this.adjacencyList[v2]) {
            this.adjacencyList[v2].push({ node: v1, weight: weight });
        }
    }

    shortestPath = (start, end) => {
        const queue = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];

        // Build Up Initial State
        for (let vertex in this.adjacencyList) {
            if (vertex == start) {
                distances[vertex] = 0;
                queue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                queue.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // console.log(distances);
        // console.log(queue);
        // console.log(previous);

        // As long as there is something to visit Loop over it

        while (queue.values.length) {
            smallest = queue.dequeue().val;
            if (smallest === end) {
                // We are done - Build Path for reqturn
                // console.log(distances);
                console.log(previous[smallest]);
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbour in this.adjacencyList[smallest]) {
                    // Find Neighboring Node
                    let nextNode = this.adjacencyList[smallest][neighbour];
                    //  console.log(nextNode);

                    // Calculate new Distance to neighbouring node
                    let candidate = distances[smallest] + nextNode.weight;
                    if (candidate < distances[nextNode.node]) {
                        // Updating new Smallest distance to neighbour
                        distances[nextNode.node] = candidate;

                        // Updating how we got to the neighbour
                        previous[nextNode.node] = smallest;

                        // Enqueue in priority queue with new Priority
                        queue.enqueue(nextNode.node, candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();

    }

}


let newGraph = new WeightedGraph();
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");


newGraph.addEdge("A", "B", 4);
newGraph.addEdge("A", "C", 2);
newGraph.addEdge("B", "E", 3);
newGraph.addEdge("C", "D", 2);
newGraph.addEdge("C", "F", 4);
newGraph.addEdge("D", "E", 3);
newGraph.addEdge("D", "F", 1);
newGraph.addEdge("E", "F", 1);

// console.log(newGraph);
console.log(newGraph.shortestPath("A", "F"));