import {Graph, IGraph} from './LoggedInContainer/LoggedInContainers/viewBuilders/ForexBuilder/forexGraphStructureAndLogic/GraphDataModelandLogic';
import { IForexBuilderState } from './LoggedInContainer/LoggedInContainers/viewBuilders/ForexBuilder/ForexReducer';

// export interface IViewed {
//     name: string,
//     dateModified: Date,
//     model: IForexViewed | IOtherViewed
// }

// interface IForexViewed {
//     model: IGraph
// }

// //to be implemented
// interface IOtherViewed {
//     model: any
// }

//this state keeps track of recently viewed 'views'
//'view' can be form community, self, or when creating an new view


interface IModelState {
    model: IForexBuilderState | any//add addition views as they are implemented
}

export interface IHomeState {
    recentlyViewed: IModelState  [],
}

export interface IHomeAction {
    type: "ADD_RECENTLY_VIEWED",
    data: IModelState
}

const initialState: IHomeState = {
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

