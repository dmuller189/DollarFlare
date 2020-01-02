import React from 'react';
import { IGraph } from '../forexGraphStructureAndLogic/GraphDataModelandLogic';
//@ts-ignore
import { Graph } from 'react-d3-graph';


const data = {
    nodes: [{ id: "Harry",
            color: "red" }, 

            { id: "Sally",
            color: "blue" }, 

            { id: "Alice" }],
    links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }],
};
const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: "lightgreen",
        size: 1000,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
};

const onClickGraph = function () {
  //  window.alert(`Clicked the graph background`);
};

//@ts-ignore
const onClickNode = function (nodeId) {
   // window.alert(`Clicked node ${nodeId}`);
};
//@ts-ignore

const onDoubleClickNode = function (nodeId) {
   // window.alert(`Double clicked node ${nodeId}`);
};
//@ts-ignore

const onRightClickNode = function (event, nodeId) {
   // window.alert(`Right clicked node ${nodeId}`);
};
//@ts-ignore

const onMouseOverNode = function (nodeId) {
 //   window.alert(`Mouse over node ${nodeId}`);
};
//@ts-ignore

const onMouseOutNode = function (nodeId) {
 //   window.alert(`Mouse out node ${nodeId}`);
};
//@ts-ignore

const onClickLink = function (source, target) {
  //  window.alert(`Clicked link between ${source} and ${target}`);
};
//@ts-ignore

const onRightClickLink = function (event, source, target) {
  //  window.alert(`Right clicked link between ${source} and ${target}`);
};
//@ts-ignore

const onMouseOverLink = function (source, target) {
  //  window.alert(`Mouse over in link between ${source} and ${target}`);
};
//@ts-ignore

const onMouseOutLink = function (source, target) {
   // window.alert(`Mouse out link between ${source} and ${target}`);
};
//@ts-ignore

const onNodePositionChange = function (nodeId, x, y) {
  //  window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};


interface IProps {
    model: IGraph
}

interface IState {
    graph: { id: number, label: string }[],
    options: any,
    events: any,
    style: any,


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
export default class BaseNetworkViewLevel extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
    }

    drawForex(): void {
    }

    render() {
        return (

            <div className="d-flex justify-content-center">
                {/* <h1>
                    Drawing layer
              </h1> */}
{/* 
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
                </ul> */}
                <div id="mynetwork"></div>

                <Graph
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    data={data}
                    config={myConfig}
                    onClickNode={onClickNode}
                    onRightClickNode={onRightClickNode}
                    onClickGraph={onClickGraph}
                    onClickLink={onClickLink}
                    onRightClickLink={onRightClickLink}
                    onMouseOverNode={onMouseOverNode}
                    onMouseOutNode={onMouseOutNode}
                    onMouseOverLink={onMouseOverLink}
                    onMouseOutLink={onMouseOutLink}
                    onNodePositionChange={onNodePositionChange}
                />
            </div>
        )
    }
}

