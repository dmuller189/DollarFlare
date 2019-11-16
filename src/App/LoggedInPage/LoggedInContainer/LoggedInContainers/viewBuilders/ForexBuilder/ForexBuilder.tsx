import React from 'react';
import { connect } from 'react-redux';
import {Graph, IGraph} from './forexGraphStructureAndLogic/GraphDataModelandLogic';


class ForexBuilder extends React.Component {

    componentDidMount() {

        let g: IGraph = new Graph();
        g.addNode("AUD");
        g.addNode("JPY");
        g.addNode("USD");
        g.addNode("GBP");
        g.addEdge("JPY", "AUD");
        g.addEdge("JPY", "USD");
        //g.printGraph();


        //@ts-ignore
        this.props.dispatch({type:  "ADD_RECENTLY_VIEWED",
                            data: {
                                type: "forex graph",
                                name: "new forex build" + Math.floor(100*Math.random()),
                                dateModified: "10/01/2019"
                            }
                        });
    }

    render() {
        return(
            <div>
                <h1>
                    Project Title:
                </h1>
            </div>
        )
    }
}

export default connect()(ForexBuilder);