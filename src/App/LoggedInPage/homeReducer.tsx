


interface IHomeState {
    viewSelection: "FXnet" | "none" 
}

interface IHomeAction {
    type: string
}

const initialState: IHomeState = {viewSelection: "none"}

export default function homeReducer(state=initialState, action: IHomeAction): IHomeState {
    switch(action.type) {
        default:
            return state;
    }
}