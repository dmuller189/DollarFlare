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
export default class GraphView extends React.Component {

    constructor(props: IProps) {
        super(props);
        this.state = {
            title: "Your Graph",
            pairs: props.pairs
        }

    
    }


    componentDidMount(): void {
        //renders d3 graph content here
    }



    render () {
        return (
            <div>
                
            </div>
        )
    }

}