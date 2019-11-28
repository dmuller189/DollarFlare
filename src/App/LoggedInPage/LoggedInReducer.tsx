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

export const ADD_RECENTLY_VIEWED =  "ADD_RECENTLY_VIEWED";
export const SET_CURR_VIEW = "SET_CURR_VIEW"

interface AddRecentlyViewedAction {
    type: typeof ADD_RECENTLY_VIEWED,
    data: UniversalModel
}

interface SetCurViewAction {
    type: typeof SET_CURR_VIEW,
    data: UniversalModel
}

type loggedInActionTypes = AddRecentlyViewedAction | SetCurViewAction;

export function addRecentlyViewed(m: UniversalModel): loggedInActionTypes {
    return {
        type: ADD_RECENTLY_VIEWED,
        data: m
    }
}

export function setCurView(m: UniversalModel): loggedInActionTypes {
    return {
        type: SET_CURR_VIEW,
        data: m
    }
}


const initialState: IHomeState = {
    curModel: new FakeModel("fake", 1, new Date()),
    recentlyViewed: []
}

///////////////////
export function dispatchSetCurView(m: UniversalModel): loggedInActionTypes {
    return {
        type: SET_CURR_VIEW,
        data: m
    }
} 

export function dispatchAddRecentlyViewed(m: UniversalModel): loggedInActionTypes {
    return {
        type: ADD_RECENTLY_VIEWED,
        data: m
    }
}
////////////////



export default function loggenInReducer(state = initialState, action: loggedInActionTypes): IHomeState {
    switch(action.type) {

        case SET_CURR_VIEW:
            return Object.assign({}, state, {curModel: action.data})

        case ADD_RECENTLY_VIEWED:
            return  Object.assign({}, state, {recentlyViewed: state.recentlyViewed.concat([action.data])})
            
        default:
            return state;
    }
}

