import React from 'react';
import { IGraph } from '../forexGraphStructureAndLogic/GraphDataModelandLogic';
//@ts-ignore
import { Graph } from 'react-d3-graph';
import './BaseNetworkViewLevel.css';

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

interface IProps {
    model: IGraph
}

interface IState {
    cons: typeof myConfig,
    dd:  {nodes: {} [], links: {} []}
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
        this.onClickGraph();
    }

    onClickGraph() {


        let name: string = Math.round(Math.random()* 1000) + "";
        //new list of nodes
        let copy = this.state.dd.nodes.concat({
            id: name,
            color: "blue"
        });

        //new edges
        let eCopy = this.state.dd.links.concat(
            { source: name, target: "Alice" }
        );

        let newData = this.state.dd;
        newData.nodes = copy;
        newData.links = eCopy;

        this.setState({
            dd: newData
        })

        //@ts-ignore
       // alert("clicked graph" + this.state.dd.nodes.map(e => e.id))
    }

    render() {
        return (

            <div className="d-flex justify-content-center" id="mynetwork">
                <Graph
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    data={this.state.dd}
                    config={myConfig}
                    // onClickNode={onClickNode}
                    // onRightClickNode={onRightClickNode}
                    onClickGraph={this.onClickGraph}
                    // onClickLink={onClickLink}
                    // onRightClickLink={onRightClickLink}
                    // onMouseOverNode={onMouseOverNode}
                    // onMouseOutNode={onMouseOutNode}
                    // onMouseOverLink={onMouseOverLink}
                    // onMouseOutLink={onMouseOutLink}
                    // onNodePositionChange={onNodePositionChange}
                />
            </div >
        )
    }
}

