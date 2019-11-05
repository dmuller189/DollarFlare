//20 currency tickers
type NodeName =
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
    | "BRL"; //brazzilian real


export interface IGraph {
    nodeList: INode [],

    addNode(node: NodeName): void,
    removeNode(node: NodeName): void,
    addEdge(from: NodeName, to: NodeName): void,
    removeEdge(from: NodeName, to: NodeName): void,
    updateEdgeWeights(): void,
    printGraph: Function;
}

interface INode {
    readonly name: NodeName,
    neighbors:  IEdge []

    addEdge(to: INode): void,

    //which signature? (INode vs NodeName)
    removeEdge(to: NodeName): INode;
}

interface IEdge {
    toNode: INode,
    weight: number
}

export class Graph implements IGraph {

    nodeList: INode [];

    constructor() {
        this.nodeList = [];
    }

    addNode(node: NodeName) {
        if (this.nodeList.map(e => e.name).includes(node)) {
            throw new Error('Node alread in graph');
        }
        this.nodeList.push(new Node(node))
    }

    removeNode(node: NodeName): void {
        //remove node, then all in-edge references

        //removes node:
        this.nodeList = this.nodeList.filter(e => e.name !== node);

        //removes all in-edges to node:
        this.nodeList = this.nodeList.map(
            e => e.removeEdge(node)
        );

        
    }

    addEdge(from: NodeName, to: NodeName):void {
        //can only add edges to existing nodes
        if(this.nodeList.filter(e => e.name === from || e.name === to).length < 2) {
           console.log("to and from node must exist");
           return;
        }
        let fromNode: INode = this.nodeList.filter(e => e.name === from)[0];
        let toNode: INode = this.nodeList.filter(e => e.name === to)[0];
        fromNode.addEdge(toNode);
    }

    removeEdge(from: NodeName, to: NodeName): void {

    }

    updateEdgeWeights(): void {

    }

    printGraph(): void {
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



interface IForexBuilderState {
    Graph: IGraph 
    CurrPresentationView: "BASIC" | "ROUND" | "OTHER" //lists which layout for network
    FXName: string,
    FXDate: string,
    FXID: number
}


interface IForexBuilderAction {
    action: "ADD_NODE" | "REMOVE_NODE"
    | "ADD_EDGE" | "REMOVE_EDGE" | "CLEAR_NODES"
    | "CLEAR_EDGES" | "ADD_ALL_NODES" | "ADD_ALL_EDGES" | "BUILD_EDGE_VALS",
    data: {
        addNode?: string,
        removeNode?: string,
        addEdge?: {
            to: string,
            from: string
        },
        removeEDGE?: {
            to: string,
            from: string
        }
    }
}



// const initialState: IForexBuilderState {
    
// }