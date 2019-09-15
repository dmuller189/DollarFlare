import React from 'react';
import * as d3 from 'd3';


class GraphView extends React.Component {


    constructor(props: object) {
        super(props);

        this.state = {
            pairs: ["USDtoEUR", "USDto"],
            date: "",
            selectAllEdges: false,

        }
        this.buildGraph = this.buildGraph.bind(this);

        //event handlers
        this.handleNodeClick = this.handleNodeClick.bind(this);
        this.handleBuildGraphClick = this.handleBuildGraphClick.bind(this);
        this.handleEdgeClick = this.handleEdgeClick.bind(this);
    }

    componentDidMount(): void {
        //render with d3
    }

    handleNodeClick(): void {
        //event handler when clicking on a node

    }

    handleEdgeClick(): void {

    }

    handleBuildGraphClick(): void {

    }


    //fethes from server with graph info
    buildGraph(): void {

    }


    render() {
        return (
            <div>
                app
            </div>
        )
    }
}