import React from 'react';
import { IGraph } from '../forexGraphStructureAndLogic/GraphDataModelandLogic';

interface IProps {
    model: IGraph
}

//class representing the drawing library to render the forex model
//will be able to:
//  - select view mode (force vs rigid vs various shapes)
//  - select and deselect edges and nodes to editing:
//    - (e.g. remove edge/node, add edge from, add edge to)
//  - global option of adding an edge
//  - global option of adding a node
//  - build edge weights with third party api
//  - clear all nodes
//  - clear all edges
//  - clear selected edges
//  - clear selected nodes (and thier respective out-edges)
//  - add all nodes
//  - add all edges 
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

