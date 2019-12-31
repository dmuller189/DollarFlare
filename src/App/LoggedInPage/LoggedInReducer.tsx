import {UniversalModel} from './LoggedInContainer/LoggedInContainers/viewBuilders/universalModel';
import { Graph, IGraph } from './LoggedInContainer/LoggedInContainers/viewBuilders/ForexBuilder/forexGraphStructureAndLogic/GraphDataModelandLogic';

interface IHomeState {
   // curModel: UniversalModel,
    recentlyViewed: UniversalModel  [],
    IDcount: number
}

export const ADD_RECENTLY_VIEWED =  "ADD_RECENTLY_VIEWED";
export const SET_CURR_VIEW = "SET_CURR_VIEW";
export const INCREMENT_ID = "INCREMENT_ID";
export const SET_RECENT_VIEWED = "SET_RECENT_VIEWED";

interface AddRecentlyViewedAction {
    type: typeof ADD_RECENTLY_VIEWED,
    data: UniversalModel
}

interface SetCurViewAction {
    type: typeof SET_CURR_VIEW,
    data: UniversalModel
}

interface IncrementIDCount {
    type: typeof INCREMENT_ID,

}

interface SetRecentViewed {
    type: typeof SET_RECENT_VIEWED,
    data: UniversalModel
}
type loggedInActionTypes = AddRecentlyViewedAction | SetCurViewAction | IncrementIDCount | SetRecentViewed;

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
//curModel: new Graph(),
    recentlyViewed: [],
    IDcount: 1000 //consider making this into an iterator<number> instead
}


export default function loggedInReducer(state = initialState, action: loggedInActionTypes): IHomeState {
    switch(action.type) {

        case ADD_RECENTLY_VIEWED:
            return Object.assign({}, state, {recentlyViewed: state.recentlyViewed.concat([action.data])})

        case INCREMENT_ID:
            return Object.assign({}, state, {IDcount: state.IDcount+1 })

        case SET_RECENT_VIEWED:
            //let index: number = state.recentlyViewed.findIndex(e => e.ID === action.data.ID);
            return Object.assign({}, state, {recentlyViewed : setRecentlyViewed(state.recentlyViewed, action.data)   } );
        
            default:
            return state;
    }
}

function setRecentlyViewed(arr: UniversalModel[], m: UniversalModel): UniversalModel[] {
    let ans = [...arr];

    let index2: number = ans.findIndex(e => e.ID === m.ID);
   //let index: number = arr.findIndex(e => e.ID === m.ID);
    ans[index2] = m;
    return ans;
}

