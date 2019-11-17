import UniversalModel from './LoggedInContainer/LoggedInContainers/viewBuilders/universalModel';


export interface IHomeState {
    curModel: UniversalModel,
    recentlyViewed: UniversalModel  [],
}


class FakeModel implements UniversalModel {
    name: string;
    ID: number;
    date: Date;
    constructor(n: string, i: number, d: Date) {
        this.name =n;
        this.ID = i;
        this.date = d;
    }
}

export interface IHomeAction {
    type: "ADD_RECENTLY_VIEWED" |
    "SET_CURR_VIEW",
    data: UniversalModel
}

const initialState: IHomeState = {
    curModel: new FakeModel("fake", 1, new Date()),
    recentlyViewed: []
}

export default function loggenInReducer(state = initialState, action: IHomeAction): IHomeState {
    switch(action.type) {

        case "SET_CURR_VIEW":
            return Object.assign({}, state, {curModel: action.data})

        case "ADD_RECENTLY_VIEWED":
            return  Object.assign({}, state, {recentlyViewed: state.recentlyViewed.concat([action.data])})
            
        default:
            return state;
    }
}

