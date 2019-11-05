import React from 'react';
import { connect } from 'react-redux';
import {Graph, IGraph} from './ForexReducer'


class ForexBuilder extends React.Component {

    componentDidMount() {

        let g: IGraph = new Graph();
        g.addNode("AUD");
        g.addNode("JPY");
        g.printGraph();
        console.log('gggggggggggggg');


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
                    forex builder
                </h1>
            </div>
        )
    }
}

export default connect()(ForexBuilder);