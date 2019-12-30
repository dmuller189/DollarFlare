import React from 'react';
import { connect } from 'react-redux';
import { IGraph } from '../forexGraphStructureAndLogic/GraphDataModelandLogic';

interface IProps {
    model: IGraph
}

//class representing the drawing library to render the forex model
export default class BaseNetworkViewLevel extends React.Component <IProps> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (

            <div className="d-flex justify-content-center">
              <h1>
                    Drawing layer
              </h1>
              
              <ul>
                  {this.props.model.nodeList.map(
                      e => {
                          return (
                              <li>
                                  
                                 {e.name + " -> " + e.neighbors.map(
                                     j => j.toNode.name + ", "
                                 )} 
                              </li>
                          )
                      }
                  )}
              </ul>
            </div>
        )
    }
}


// function mapStateToProps(state: any) {
//     return {
//         model: state.forexBuilderState.BuiltGraph
//     }
// }


// export default connect(mapStateToProps)(BaseNetworkViewLevel);