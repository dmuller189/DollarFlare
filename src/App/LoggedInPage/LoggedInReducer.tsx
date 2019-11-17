import UniversalModel from './LoggedInContainer/LoggedInContainers/viewBuilders/universalModel';


export interface IHomeState {
    recentlyViewed: UniversalModel  [],
}

export interface IHomeAction {
    type: "ADD_RECENTLY_VIEWED",
    data: UniversalModel
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

