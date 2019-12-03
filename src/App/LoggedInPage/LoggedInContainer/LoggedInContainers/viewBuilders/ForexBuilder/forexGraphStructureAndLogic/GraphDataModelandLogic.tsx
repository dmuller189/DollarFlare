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

    //Graph Algorithms
    findArbitrage(): IGraphArbitragePath,

    printGraph: Function;
}

interface INode {
    readonly name: NodeName,
    neighbors:  IEdge []
    //which signature? (INode vs NodeName)
    addEdge(to: INode): void,
    removeEdge(to: NodeName): INode;
}

interface IEdge {
    toNode: INode,
    weight: number
}

export class Graph implements IGraph {

    nodeList: INode [];
    name: string;
    date: Date;
    ID: number;

    constructor() {
        this.nodeList = [];
        this.name = "New Graph";
        this.date = new Date();
        this.ID = 0;
    }

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

    setID(n: number) {
        this.ID = n;
        return this;
    }

    addNode(node: NodeName): IGraph {
        if (this.nodeList.map(e => e.name).includes(node)) {
            throw new Error('Node alread in graph');
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
        //calling server -> API -> updating edge weights
        return this;
    }

    findArbitrage(): IGraphArbitragePath {
        
        //placeholder code for eventual implementation of bellman ford arbitrage algorithm
        let g: IGraph = new Graph();

        let paths: IGraphArbitragePath = {paths: [g]};
        
        return paths;
    }

    printGraph(): void {
        console.log(" ------------- ");
        console.log(this.nodeList);
        console.log(" -------------- ");
        this.nodeList.map(
            e => console.log(e.name + ", with edges directed to: " + e.neighbors.map(j => j.toNode.name))
        )
    }
}

class Edge implements IEdge {
    toNode: INode;
    weight: number;

    constructor(node: INode, w: number) {
        this.toNode = node;
        this.weight = w;
    }
}

class Node implements INode {
    name: NodeName;
    neighbors: IEdge [];

    constructor(n: NodeName) {
        this.name = n;
        this.neighbors = [];
    } 

    addEdge(to: INode) {
        //test if edge exists
        if (this.neighbors.filter(e => e.toNode.name === to.name).length===0) {
            console.log("edge from " + this.name + " to " + to.name + " already exists");
        }

        this.neighbors.push(new Edge(to, 99));
    }

    removeEdge(to: NodeName) {
        //removes edge to another node, returns this node
        this.neighbors = this.neighbors.filter(
            e => e.toNode.name !== to
        )
        return this;
    }
}
