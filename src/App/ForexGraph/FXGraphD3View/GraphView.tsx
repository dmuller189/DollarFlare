import React from 'react';
import * as d3 from 'd3';

interface IProps {
    pairs: string[],
    date: string,
    nodeOnClicked: Function,
    edgeOnClicked: Function,
    allEdges: "true" | "false"
}


//implements the d3 graph network view
//takes evet handlers as props to push data upwards to controller
export default class GraphView extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            //represents a negative cycle in a graph for arbitrage
            arbitragePaths: []
        }
    }


    componentDidMount(): void {
        //renders d3 graph content here
        //'light up' each edge contained in the arbitrage path
    }




    render () {
        return (
            <div id="graph">

                {
                    this.props.pairs.map(e => {
                        return e + " - ";
                    })
                }
 
            </div>
        )
    }

}