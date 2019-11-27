import { IGraph, Graph, NodeName } from './GraphDataModelandLogic';


interface IForexBuilderState {
    BuiltGraph: IGraph
    CurrPresentationView: "BASIC" | "ROUND" | "OTHER" //lists which layout for network
    //FXName: string,
    FXDate: Date,
    FXID: number
}

let initGraph: IGraph = new Graph();
initGraph.setName("Untitiled G");

const initialFXState: IForexBuilderState = {
    BuiltGraph: initGraph,
    CurrPresentationView: "BASIC",
    //FXName: "Project Name: 'Untitled'",
    FXDate: new Date(),
    FXID: 1
}


export const SET_GRAPH = "SET_GRAPH";
export const ADD_NODE = "ADD_NODE";
export const REMOVE_NODE = "REMOVE_NODE";
export const ADD_EDGE = "ADD_EDGE";
export const REMOVE_EDGE = "REMOVE_EDGE";
export const CLEAR_NODES = "CLEAR_NODES";
export const CLEAR_EDGES = "CLEAR_EDGES";
export const ADD_ALL_NODES = "ADD_ALL_NODES";
export const ADD_ALL_EDGES = "ADD_ALL_EDGES";
export const BUILD_EDGE_VALS = "BUILD_EDGE_VALS";
export const SET_VIEW_NAME = "SET_VIEW_NAME";

interface SetGraphAction {
    type: typeof SET_GRAPH,
    data: IGraph
}
interface AddNodeAction {
    type: typeof ADD_NODE,
    data: NodeName
}
interface RemoveNodeAction {
    type: typeof REMOVE_NODE,
    data: NodeName
}
interface AddEdgeAction {
    type: typeof ADD_EDGE,
    data: {
        to: NodeName,
        from: NodeName
    }
}
interface RemoveEdgeAction {
    type: typeof REMOVE_EDGE,
    data: {
        to: NodeName,
        from: NodeName
    }
}
interface ClearNodesAction {
    type: typeof CLEAR_NODES,
}
interface ClearEdgesAction {
    type: typeof CLEAR_EDGES
}
interface AddAllNodesAction {
    type: typeof ADD_ALL_NODES
}
interface AddAllEdgesAction {
    type: typeof ADD_ALL_EDGES
}
interface BuildEdgeValsAction {
    type: typeof BUILD_EDGE_VALS
}
interface SetViewNameAction {
    type: typeof SET_VIEW_NAME,
    data: string
}

type ForexActionTypes = SetGraphAction | 
                        AddNodeAction |
                        RemoveNodeAction |
                        AddEdgeAction |
                        RemoveEdgeAction |
                        ClearNodesAction |
                        ClearEdgesAction |
                        AddAllNodesAction |
                        AddAllEdgesAction |
                        BuildEdgeValsAction |
                        SetViewNameAction;

// interface IForexBuilderAction {
//     type: "SET_GRAPH" | "ADD_NODE" | "REMOVE_NODE"
//     | "ADD_EDGE" | "REMOVE_EDGE" | "CLEAR_NODES"
//     | "CLEAR_EDGES" | "ADD_ALL_NODES" | "ADD_ALL_EDGES" | "BUILD_EDGE_VALS"
//     | "SET_VIEW_NAME",
//     data: {
//         gModel?: IGraph
//         viewName?: string,
//         addNode?: NodeName,
//         removeNode?: NodeName,
//         addEdge?: {
//             to: NodeName,
//             from: NodeName
//         },
//         removeEdge?: {
//             to: NodeName,
//             from: NodeName
//         }
//     }
// }

export default function forexBuilderReducer(state = initialFXState, action: ForexActionTypes): IForexBuilderState {

    switch (action.type) {

        case SET_GRAPH:
            return Object.assign({}, state, {
                BuiltGraph: action.data
            })

        case SET_VIEW_NAME:
            return Object.assign({}, state, {
                BuiltGraph: state.BuiltGraph.setName(String(action.data))
            })

        case ADD_NODE:
            return Object.assign({}, state, {
                BuiltGraph: state.BuiltGraph.addNode(action.data)
            })

        case REMOVE_NODE:
            return Object.assign({}, state, {
                BuiltGraph: state.BuiltGraph.removeNode(action.data)
            })

        case ADD_EDGE:
            return Object.assign({}, state, {
                BuiltGraph: state.BuiltGraph.addEdge(action.data.from, action.data.to)
            })

        case REMOVE_EDGE:
            return Object.assign({}, state, {
                BuiltGraph: state.BuiltGraph.removeEdge(action.data.from, action.data.to)
            })

        default:
            return state;
    }
}
