import React from 'react';
import { IGraph } from '../forexGraphStructureAndLogic/GraphDataModelandLogic';
//@ts-ignore
import { Graph } from 'react-d3-graph';
import './BaseNetworkViewLevel.css';

const myConfig = {
    automaticRearrangeAfterDropNode: true,
    minZoom: .75,
    maxZoom: 2,
    height: window.innerHeight * .75,
    width: window.innerWidth * .5,
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

interface libNode {
    id: string,
    color: string,
    x: number,
    y: number
}

interface libEdge {
    source: string,
    target: string,
    strokeWidth: number,
    type: string
}

interface IProps {
    model: IGraph
}

interface IState {
    cons: typeof myConfig,
    nodes: libNode[],
    links: libEdge[]
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
            nodes: [{
                id: "Harry",
                color: "red",
                x: 500,
                y: 500
            },
            {
                id: "Sally",
                color: "blue",
                x: 250,
                y: 250
            },
            {
                id: "Alice",
                color: "red",
                x: 500,
                y: 500
            }],

            links: [] //[{ source: "Harry", target: "Sally", strokeWidth: 10, type: "CURVE_SMOOTH" }, { source: "Harry", target: "Alice" }],
        }

        this.onClickGraph = this.onClickGraph.bind(this);
        this.mapStateToLibNodes = this.mapStateToLibNodes.bind(this);
    }
    /**
     * converts this components state data to an
     * array or nodes that the graph library is able to use
     * TODO
     */
    mapStateToLibNodes() {

        let stateNodes: libNode[] = this.props.model.nodeList.map(e => {
            return { id: e.name + "", color: "blue", x: 250, y: 250 }
        })

        console.log("state nodes from props are: ");
        console.log(stateNodes);
        // this.setState({
        //     nodes: stateNodes,
        // });
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
       // this.mapStateToLibNodes();
    }

    onClickGraph() {

        this.mapStateToLibNodes();

        let name: string = Math.round(Math.random() * 1000) + "";
        //new list of nodes
        let nodesCopy = this.state.nodes.concat({
            id: name,
            color: "blue",
            x: 150,
            y: 150
        });

        //new edges
        let linksCopy: libEdge[] = this.state.links.concat({ 
            source: name, 
            target: "Alice", 
            strokeWidth: 10, 
            type: "CURVE_SMOOTH"}
        );

        this.setState({
            nodes: nodesCopy,
            links: linksCopy
        })
    }

    buildData(): { nodes: libNode[], links: libEdge[] } {
        const data = {
            nodes: this.state.nodes,
            links: this.state.links
        }
        return data;
    }

    render() {
        return (

            <div className="d-flex justify-content-center" id="mynetwork">
                <Graph
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    data={this.buildData()}
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

