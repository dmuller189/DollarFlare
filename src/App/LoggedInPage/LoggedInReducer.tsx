import {Graph, IGraph} from './LoggedInContainer/LoggedInContainers/viewBuilders/ForexBuilder/forexGraphStructureAndLogic/EverythingGraphs';

export interface IViewed {
    name: string,
    dateModified: Date,
    model: IForexViewed | IOtherViewed
}

interface IForexViewed {
    model: IGraph
}

//to be implemented
interface IOtherViewed {
    model: any
}

//this state keeps track of recently viewed 'views'
//'view' can be form community, self, or when creating an new view
export interface IHomeState {
    currFXModel: IGraph,
    currOtherModel: any //implement other view model
    recentlyViewed: IViewed [],
}

export interface IHomeAction {
    type: "ADD_RECENTLY_VIEWED",
    data: IViewed
}

const initialState: IHomeState = {
    currFXModel: new Graph(),
    currOtherModel: undefined,
    recentlyViewed: []
}

export default function loggenInReducer(state = initialState, action: IHomeAction): IHomeState {
    switch(action.type) {

        case "ADD_RECENTLY_VIEWED":
            return  Object.assign({}, state, {recentlyViewed: state.recentlyViewed.concat([action.data])})
            
        default:
            return state;
    }
}

