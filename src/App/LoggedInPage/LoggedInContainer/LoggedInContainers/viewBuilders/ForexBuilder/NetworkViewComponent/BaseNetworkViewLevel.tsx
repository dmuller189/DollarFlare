import React from 'react';
import { connect } from 'react-redux';
import forexBuilderReducer from '../ForexReducer';

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