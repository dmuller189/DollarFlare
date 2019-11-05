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
    printGraph: Function;
}

interface INode {
    readonly name: NodeName,
    neighbors:  IEdge []
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
    }

    addEdge(from: NodeName, to: NodeName):void {

    }

    removeEdge(from: NodeName, to: NodeName): void {

    }

    printGraph(): void {
        this.nodeList.map(
            e => console.log(e.name + ", with edges: " + e.neighbors.map(j => j.toNode))
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