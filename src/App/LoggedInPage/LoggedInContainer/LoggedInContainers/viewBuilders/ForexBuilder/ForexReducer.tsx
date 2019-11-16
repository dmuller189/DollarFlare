import { IGraph, Graph, NodeName} from './forexGraphStructureAndLogic/GraphDataModelandLogic';
//import {loggenInReducer} from '../../../../LoggedInReducer';


interface IForexBuilderState {
    BuiltGraph: IGraph 
    CurrPresentationView: "BASIC" | "ROUND" | "OTHER" //lists which layout for network
    FXName: string,
    FXDate: Date,
    FXID: number
}

let initGraph: IGraph = new Graph();
initGraph.setName("Untitled");

const initialFXState: IForexBuilderState = {
    BuiltGraph: initGraph,
    CurrPresentationView: "BASIC",
    FXName: "Untitled",
    FXDate: new Date(),
    FXID: 1    
}


interface IForexBuilderAction {
    type: "ADD_NODE" | "REMOVE_NODE"
    | "ADD_EDGE" | "REMOVE_EDGE" | "CLEAR_NODES"
    | "CLEAR_EDGES" | "ADD_ALL_NODES" | "ADD_ALL_EDGES" | "BUILD_EDGE_VALS",
    data: {
        addNode?: NodeName,
        removeNode?: NodeName,
        addEdge?: {
            to: NodeName,
            from: NodeName
        },
        removeEdge?: {
            to: NodeName,
            from: NodeName
        }
    }
}

export default function forexBuilderReducer(state = initialFXState, action: IForexBuilderAction): IForexBuilderState {

    switch(action.type) {

        case "ADD_NODE":
            return Object.assign({}, state, {
                BuiltGraph: state.BuiltGraph.addNode(action.data.addNode)
            })

        case "REMOVE_NODE":
            return Object.assign({}, state, {
                BuiltGraph: state.BuiltGraph.removeNode(action.data.addNode)
            })

        case "ADD_EDGE":
            return Object.assign({}, state, {
                //@ts-ignore
                BuiltGraph: state.BuiltGraph.addEdge(action.data.addEdge.from, action.data.addEdge.to)
            })

        case "REMOVE_EDGE":
            return Object.assign({}, state, {
                //@ts-ignore
                BuiltGraph: state.BuiltGraph.removeEdge(action.data.addEdge.from, action.data.addEdge.to)
            })
        
        default:
            return state;
    }
}
