


interface IViewed {
    type: "forex" | "other", // add other views in future 
    name: string
    dateModified: string
}

//this state keeps track of recently viewed 'views'
//'view' can be form community, self, or when creating an new view
interface IHomeState {
    recentlyViewed: IViewed []
}


interface IHomeAction {
    type: "ADD_RECENTLY_VIEWED",
    data: IViewed
}

const initialState: IHomeState = {
    recentlyViewed: [
        {type: "forex",
         name: "initial view",
        dateModified: "10/01/2019"}
    ]
}

export default function loggenInReducer(state = initialState, action: IHomeAction): IHomeState {
    switch(action.type) {

        case "ADD_RECENTLY_VIEWED":
            return {
                recentlyViewed: state.recentlyViewed.concat([action.data])
            }
            break;
        default:
            return state;
    }
}