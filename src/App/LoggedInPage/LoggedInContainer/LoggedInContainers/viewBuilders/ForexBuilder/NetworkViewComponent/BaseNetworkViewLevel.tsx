import React from 'react';
import { IGraph } from '../forexGraphStructureAndLogic/GraphDataModelandLogic';
//@ts-ignore
import { Graph } from 'react-d3-graph';
import './BaseNetworkViewLevel.css';


const data = {

    nodes: [{
        id: "Harry",
        color: "red"
    },

    {
        id: "Sally",
        color: "blue"
    },

    { id: "Alice" }],

    links: [{ source: "Harry", target: "Sally", strokeWidth: 10, type: "CURVE_SMOOTH" }, { source: "Harry", target: "Alice" }],
};


const myConfig = {
    minZoom: 1,
    maxZoom: 1.5,
    height: window.innerHeight * .85,
    width: window.innerWidth * .5,
    eidth: 500,
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

// const onClickGraph = function () {
//     //  window.alert(`Clicked the graph background`);
//     data.nodes.push({
//         id: "NEW",
//         color: "blue"
//     });
//     alert("clicked graph" + data.nodes.map(e => e.id))
// };

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
    cons: typeof myConfig,
    dd: typeof data
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
export default class BaseNetworkViewLevel extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

         this.state = {
             cons: myConfig,
             dd: {

                nodes: [{
                    id: "Harry",
                    color: "red"
                },
            
                {
                    id: "Sally",
                    color: "blue"
                },
            
                { id: "Alice" }],
            
                links: [{ source: "Harry", target: "Sally", strokeWidth: 10, type: "CURVE_SMOOTH" }, { source: "Harry", target: "Alice" }],
            }
         }

         this.onClickGraph = this.onClickGraph.bind(this);
    }

    /**
     * converts this components state data to an
     * array or nodes that the graph library is able to use
     * TODO
     */
    mapStateToLibNodes() {
        let ans = [];

        return;
    }

    /**
     * converts this compnent's state date to 
     * an array of links that the graph library can 
     * use to render edges
     * TODO
     */
    mapStateToLibLinks() {
        let ans = [];

        return;
    }

    componentDidMount() {
    }

    onClickGraph() {


        //new list of nodes
        let copy = this.state.dd.nodes.concat({
            id: "NEw",
            color: "blue"
        });

        let newData = this.state.dd;
        newData.nodes = copy;

        this.setState({
            dd: newData
        })

        alert("clicked graph" + this.state.dd.nodes.map(e => e.id))
    }

    render() {
        return (

            <div className="d-flex justify-content-center" id="mynetwork">
                <Graph
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    data={this.state.dd}
                    config={myConfig}
                    onClickNode={onClickNode}
                    onRightClickNode={onRightClickNode}
                    onClickGraph={this.onClickGraph}
                    onClickLink={onClickLink}
                    onRightClickLink={onRightClickLink}
                    onMouseOverNode={onMouseOverNode}
                    onMouseOutNode={onMouseOutNode}
                    onMouseOverLink={onMouseOverLink}
                    onMouseOutLink={onMouseOutLink}
                    onNodePositionChange={onNodePositionChange}
                />
            </div >
        )
    }
}

