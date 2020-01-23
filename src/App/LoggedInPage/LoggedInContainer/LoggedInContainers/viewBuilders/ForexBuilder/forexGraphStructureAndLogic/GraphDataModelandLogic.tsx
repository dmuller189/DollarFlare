//20 currency tickers
export type NodeName =
    "USD" //US Dolar
    | "EUR" // EU Euro
    | "JPY" //Japanese Yen
    | "GBP" //British pound
    | "CHF" //swiss franc
    | "AUD" //australian dollar
    | "CNY" //chinese renminbi
    | "HKD" //hong kong dollar
    | "NZD" //new zealand dollar
    | "SEK" //swedish krona
    | "KRW" //south korean won
    | "SGD" //singapore dollar
    | "NOK" //norwegian kronw
    | "MXN" //mexican peso
    | "INR" //Indian rupee
    | "RUB" //russian ruble
    | "ZAR" //south african rand
    | "TRY" //turkish Lira
    | "BRL" | undefined; //brazzilian real
//represents a set of paths in a graph, then when followed, yeidls a negative cycle of the log product of the weights, 
//therefore an arbitrage opportunity in the graph 
interface IGraphArbitragePath {
    readonly paths: IGraph []
}

export interface IGraph {
    name: string,
    ID: number,
    date: Date,
    //Graph Data structures
    nodeList: INode [],
    //Graph manipulations (construction and deconstruction)
    setName(name: string): IGraph,
    setID(n: number): IGraph,
    addNode(node: NodeName): IGraph,
    removeNode(node: NodeName): IGraph,
    addEdge(from: NodeName, to: NodeName): IGraph,
    removeEdge(from: NodeName, to: NodeName): IGraph,
    updateEdgeWeights(): IGraph,
    setModel(g: IGraph): IGraph,
    setEdgeWeight(from: NodeName, to: NodeName, weight: number): IGraph
    findArbitrage(): IGraphArbitragePath, //re-consider when known
    printGraph: Function;
}


/**
 * Represents an implementation of a weighted, directed graph via an
 * adjacency list
 */
export class Graph implements IGraph {

    nodeList: INode [];
    name: string;
    date: Date;
    ID: number;

    constructor() {
        this.nodeList = [];
        this.name = "New Graph";
        this.date = new Date();
        this.ID = 0; //in future access redux store to get newxt id, then dispatch to increment ID count
    }

    //perhaps add option to also change this graph's ID as well
    setModel(g: IGraph): IGraph {

        this.nodeList = g.nodeList;
        this.name = g.name;
        this.date = g.date;
        //Invariant:
        // ID is never changed
        return this;
    }

    setName(name: string): IGraph {
        this.name = name;
        return this;
    }

    setID(n: number): IGraph {
        this.ID = n;
        return this;
    }

    addNode(node: NodeName): IGraph {
        if (this.nodeList.map(e => e.name).includes(node)) {
            throw new Error('Node already in graph');
        }
        this.nodeList.push(new Node(node));
        return this;
    }

    removeNode(node: NodeName): IGraph {
        //removes subject node:
        this.nodeList = this.nodeList.filter(e => e.name !== node);

        //removes all in-edges to node:
        this.nodeList = this.nodeList.map(
            e => e.removeEdge(node)
        );
        return this;
    }

    addEdge(from: NodeName, to: NodeName): IGraph {
        //can only add edges to existing nodes
        if(this.nodeList.filter(e => e.name === from || e.name === to).length < 2) {
           console.log("to and from node must exist");
           return this;
        }
        let fromNode: INode = this.nodeList.filter(e => e.name === from)[0];
        let toNode: INode = this.nodeList.filter(e => e.name === to)[0];
        fromNode.addEdge(toNode);
        return this;
    }

    removeEdge(from: NodeName, to: NodeName): IGraph {
        //can only add edges to existing nodes
        if(this.nodeList.filter(e => e.name === from || e.name === to).length < 2) {
            console.log("to and from node must exist");
            return this;
         }
        let fromNode: INode = this.nodeList.filter(e => e.name === from)[0];
        let toNode: INode = this.nodeList.filter(e => e.name === to)[0];
        fromNode.removeEdge(to);
        return this;
    }

    updateEdgeWeights(): IGraph {
        //calling API -> get weights -> iterate and update edge weights
        return this;
    }

    setEdgeWeight(from: NodeName, to: NodeName, weight: number): IGraph {

        let fromNode: INode | undefined = this.nodeList.find(e => e.name === from);

        if(fromNode !== undefined) {
            fromNode.updateEdgeWeight(to, weight);
            return this;
         }
        return this;
    }

    //TODO - bellman-ford for negative cycles of weights
    findArbitrage(): IGraphArbitragePath {
        
        let g: IGraph = new Graph();

        let paths: IGraphArbitragePath = {paths: [g]};
        
        return paths;
    }

    printGraph(): void {
        this.nodeList.map(
            e => console.log(e.name + ", with edges directed to: " + e.neighbors.map(j => j.toNode.name))
        )
    }
}

interface IEdge {
    toNode: INode,
    weight: number,
    setWeight(weight: number): IEdge
}

class Edge implements IEdge {
    toNode: INode;
    weight: number;

    constructor(node: INode, w: number) {
        this.toNode = node;
        this.weight = w;
    }

    setWeight(weight: number): IEdge {
        this.weight = weight;
        return this;
    }
}

interface INode {
    readonly name: NodeName,
    neighbors:  IEdge []
    addEdge(to: INode): INode,
    removeEdge(to: NodeName): INode,
    updateEdgeWeight(to: NodeName, weight: number): INode
}

class Node implements INode {
    name: NodeName;
    neighbors: IEdge [];

    constructor(n: NodeName) {
        this.name = n;
        this.neighbors = [];
    } 

    /**
     * Adds an edge on this node to the specified 'to' node
     * @param to the node to add the edge to
     */
    addEdge(to: INode): INode {
        //test if edge exists
        if (this.neighbors.filter(e => e.toNode.name === to.name).length===0) {
            console.log("edge from " + this.name + " to " + to.name + " already exists");
        }
        this.neighbors.push(new Edge(to, 99));
        return this;
    }

    /**
     * Removes the specified edge from this node 
     * @param to the node from which the edge will be removed
     */
    removeEdge(to: NodeName): INode {
        //removes edge to another node, returns this node
        this.neighbors = this.neighbors.filter(
            e => e.toNode.name !== to
        )
        return this;
    }

    /**
     * Sets the edge weight of a specified edge
     * @param to the node that speficies which edge to update
     * @param weight the value of the new weight to be set
     */
    updateEdgeWeight(to: NodeName, weight: number): INode {
        let foundEdge: IEdge | undefined = this.neighbors.find(e => e.toNode.name === to);
        if (foundEdge !== undefined) {
            foundEdge.setWeight(weight);
        }
        return this;
    }
}
