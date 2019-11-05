import { IGraph} from './forexGraphStructureAndLogic/EverythingGraphs';



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