import React from 'react';
import GraphView from '../FXGraphView/GraphView';



/*
Featues to consider: 
    - edges existing at different dates in time 
    - select/clear all edges
    - add fully connected node (adding this node will connect it to every other node)
*/


let avalableTokens: string[] = [
    "USD",
    "EUR",
    "GBP",
    "CAD",
    "RUB",
]


//builds and mutates instance of d3 visual

/*handles:
    - slecting edges
    - selecting date
    - fething from server 
    - giving data to d3 instance in oher component to render
    - renders the 'shell' and controlling view parts to main d3 visual

*/



interface IState {
    pairs: string[],
    date: string,
    selectAllEdges: string,
}


export default class GraphViewController extends React.Component {


    constructor(props: any) {
        super(props);

        this.state = {
            pairs: ["USDtoEUR", "USDtoJPY", "gold to silver"],
            date: "",
            selectAllEdges: "false",
            
        }



        this.buildGraph = this.buildGraph.bind(this);

        //event handlers
        this.handleBuildGraphClick = this.handleBuildGraphClick.bind(this);
        this.handleEdgeClick = this.handleEdgeClick.bind(this);
        this.handleNodeClick = this.handleNodeClick.bind(this);
    }

    componentDidMount(): void {
        //render graph with d3
    }


    handleEdgeClick(): void {
        //event handler for clicking an edge (passed to GraphView.tsx in props)

    }

    handleNodeClick(): void {
        //event handler when clicking on a node (passed to GraphView.tsx in props)

    }

    handleAddEdge() {
        //event handler for when user adds an edge (relationship pair at certain date)
    }

    handleAddNode() {
        //event handler when user 'adds a node' a feature where such nore (a individual ticker) is added and connected to every other node in both directions 
    }

    handleBuildGraphClick(): void {
        //handles clickin of buildGraph button; fetches edge data from server and bellman for results

    }


    //fethes from server with graph info
    buildGraph(): void {

    }

    //probably will need other lifecycle m



    render() {
        return (
            <div>
                {/*
                // @ts-ignore */}
                <GraphView pairs={this.state.pairs} allEdges={this.state.selectAllEdges} date={this.state.date} nodeOnClicked={this.handleNodeClick} edgeOnClicked={this.handleEdgeClick}/>
            </div>
        )
    }
}