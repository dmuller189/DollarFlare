import React from 'react';
import { connect } from 'react-redux';



//class representing the drawing library to render the forex model
class BaseNetworkViewLevel extends React.Component {

    



    render() {
        return (
            <h1>
            Drawing layer
            </h1>
        )
    }
}


function mapStateToProps(state: any) {
    return {
        //projName: state.forexBuilderState.FXName
    }
}




export default connect(mapStateToProps)(BaseNetworkViewLevel);