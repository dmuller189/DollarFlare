import React from 'react';
import { connect } from 'react-redux';



//class representing the drawing library to render the forex model
class BaseNetworkViewLevel extends React.Component {




    render() {
        return (

            <div className="d-flex justify-content-center">
              <h1>
                    Drawing layer
              </h1>
            </div>
        )
    }
}


function mapStateToProps(state: any) {
    return {
        model: state.forexBuilderState.BuiltGraph
    }
}


export default connect(mapStateToProps)(BaseNetworkViewLevel);