

export interface INode {
    name: string
}

interface IEdge {
    to: INode,
    from: INode
    weight: number
}

interface IForexBuilderState {

    nodes: INode [],
    edges: IEdge [],


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