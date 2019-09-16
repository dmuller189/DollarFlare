import React from 'react';
import * as d3 from 'd3';

interface IProps {
    pairs: string[],
    date: string,
    nodeOnClicked: Function,
    edgeOnClicked: Function,
    allEdges: "true" | "false",
    arbitragePath: string[]
}


//implements the d3 graph network view
//takes evet handlers as props to push data upwards to controller
export default class GraphView extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);

        // this.state = {
        //     //represents a negative cycle in a graph for arbitrage

        // }
    }

    componentDidMount(): void {
        //renders d3 graph content here
        //'light up' each edge contained in the arbitrage path
    }

    render() {
        return (
            <div id="graph">
                <br></br>
                enter d3 graph
                <br></br>
                {
                    this.props.pairs.map(e => {
                        return e + " - ";
                    })
                }
                <br></br>
                arbitrage path is:
                <br></br>
                {
                    this.props.arbitragePath.map(e => {
                        return e + " - "
                    })
                }

            </div>

        )
    }

}