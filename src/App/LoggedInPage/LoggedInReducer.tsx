import UniversalModel from './LoggedInContainer/LoggedInContainers/viewBuilders/universalModel';


interface IHomeState {
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

const ADD_RECENTLY_VIEWED =  "ADD_RECENTLY_VIEWED";
const SET_CURR_VIEW = "SET_CURR_VIEW"

interface AddRecentlyViewedAction {
    type: typeof ADD_RECENTLY_VIEWED,
    data: UniversalModel
}

interface SetCurViewAction {
    type: typeof SET_CURR_VIEW,
    data: UniversalModel
}
// export interface IHomeAction {
//     type: "ADD_RECENTLY_VIEWED" |
//     "SET_CURR_VIEW",
//     data: UniversalModel
// }
export type logedInActionTypes = AddRecentlyViewedAction | SetCurViewAction;

export function addRecentlyViewed(m: UniversalModel): logedInActionTypes {
    return {
        type: ADD_RECENTLY_VIEWED,
        data: m
    }
}

export function setCurView(m: UniversalModel): logedInActionTypes {
    return {
        type: SET_CURR_VIEW,
        data: m
    }
}


const initialState: IHomeState = {
    curModel: new FakeModel("fake", 1, new Date()),
    recentlyViewed: []
}

export default function loggenInReducer(state = initialState, action: logedInActionTypes): IHomeState {
    switch(action.type) {

        case SET_CURR_VIEW:
            return Object.assign({}, state, {curModel: action.data})

        case ADD_RECENTLY_VIEWED:
            return  Object.assign({}, state, {recentlyViewed: state.recentlyViewed.concat([action.data])})
            
        default:
            return state;
    }
}

