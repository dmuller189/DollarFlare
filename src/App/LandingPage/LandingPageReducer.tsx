
interface IState {
    fireClicked: boolean
  }
  interface IAction {
    type: "CHANGE_COLOR"
  }
  const initialState: IState = {fireClicked: false}
  

export default function landinPageReducer(state=initialState, action: IAction): IState {
    switch(action.type) {
      case "CHANGE_COLOR":
        return {
          fireClicked: !state.fireClicked
        };
      default:
        return state;
    }
  }