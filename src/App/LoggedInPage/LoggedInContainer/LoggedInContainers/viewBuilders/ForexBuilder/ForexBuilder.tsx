import React from 'react';
import { connect } from 'react-redux';
import { Graph, IGraph } from './forexGraphStructureAndLogic/GraphDataModelandLogic';
import BaseNetworkViewLevel from './NetworkViewComponent/BaseNetworkViewLevel';
import './ForexBuilder.css';

class ForexBuilder extends React.Component {


    constructor(props: any) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event: any): void {
        let str = event.target.value;
        console.log(str);
        //@ts-ignore
        this.props.dispatch({
            type: "SET_VIEW_NAME",
            data: {
                viewName: str
            }
        });
        //@ts-ignore
        console.log('name change. name now:  ' + this.props.gName);
    }

    componentDidMount() {

        let g: IGraph = new Graph();
        g.setName("Untitled Forex");
        g.addNode("AUD");
        g.addNode("JPY");
        g.addNode("USD");
        g.addNode("GBP");

        //@ts-ignore
        this.props.dispatch({
            type: "SET_GRAPH",
            data: g
        })

        //@ts-ignore
        this.props.dispatch({
            type: "SET_CURR_VIEW",
            data: g
        })


    }

    componentWillUnmount() {
        console.log("unmounting");
        //@ts-ignore
        this.props.dispatch({
            type: "ADD_RECENTLY_VIEWED",
            //@ts-ignore
            data: this.props.builtGraph
        });
    }

    render() {
        return (
            <div className="form-group mx-sm-3 mb-2">
                <br></br>
                <form className="form-inline">
                    <div className="form-groun" >
                        <svg id="Nsvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        <input id="GName" className="form-control form-control-lg" type="text" name="name" onChange={this.onChange}
                            //@ts-ignore
                            placeholder={this.props.builtGraph === undefined ? "Untitled Graph11" : this.props.builtGraph.name} />
                    </div>
                </form>
                <BaseNetworkViewLevel />
            </div>
        )
    }
}


function mapStateToProps(state: any) {
    return {
        //projModel: state.loggedInState.curModel,
        builtGraph: state.forexBuilderState.BuiltGraph,
        recentlyViewed: state.loggedInState.recentlyViewed
    }
}


export default connect(mapStateToProps)(ForexBuilder);