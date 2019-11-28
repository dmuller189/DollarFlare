import React from 'react';
import ReactTooltip from 'react-tooltip';
import { connect, ConnectedProps  } from 'react-redux';
import {RootState} from '../../../../../App';
import { Graph, IGraph } from './forexGraphStructureAndLogic/GraphDataModelandLogic';
import BaseNetworkViewLevel from './NetworkViewComponent/BaseNetworkViewLevel';
import { ADD_NODE, REMOVE_NODE, ADD_EDGE, 
    REMOVE_EDGE, CLEAR_NODES, CLEAR_EDGES, ADD_ALL_NODES,
    ADD_ALL_EDGES, BUILD_EDGE_VALS, SET_VIEW_NAME, SET_GRAPH} from './forexGraphStructureAndLogic/ForexReducer';
import {SET_CURR_VIEW, ADD_RECENTLY_VIEWED} from '../../../../LoggedInReducer';
import './ForexBuilder.css';

export const uniqueName = (): boolean => {
    //@ts-ignore
    return   !(this.props.recentlyViewed.filter(e => e === document.getElementById("GName").value).length > 0);
  }





class ForexBuilder extends React.Component<propsFromRedux> {

    constructor(props: propsFromRedux) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }


    onChange(event: any): void {

        
        this.props.setViewName(event.target.value);

        // //@ts-ignore
        // this.props.dispatch({
        //     type: SET_VIEW_NAME,
        //     data: {
        //         viewName: event.target.value
        //     }
        // });
        
    }

    componentDidMount() {

        let g: IGraph = new Graph();
        g.setName("Untitled Forex Dan");
        g.addNode("AUD");
        g.addNode("JPY");
        g.addNode("USD");
        g.addNode("GBP");

        // //@ts-ignore
        // this.props.dispatch({
        //     type: "SET_GRAPH",
        //     data: g
        // })
        console.log("here");
        console.log(g);

        this.props.setGraph(g);
        
    
        // //@ts-ignore
        // this.props.dispatch({
        //     type: "SET_CURR_VIEW",
        //     data: g
        // })
    }

    componentWillUnmount() {
        
        //tests if name is in recently viewed
        let recentlyViewed: string[] = this.props.recentlyViewed.map(e => e.name);


        this.props.addRecentlyViewed(this.props.builtGraph);
        // //@ts-ignore
        // this.props.dispatch({
        //     type: "ADD_RECENTLY_VIEWED",
        //     data: this.props.builtGraph
        // });
    }

    render() {
        return (
            <div className="form-group mx-sm-3 mb-2">
                <br></br>
                <form className="form-inline">
                    <div className="form-groun" >
                        <svg id="Nsvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        <input id="GName" className="form-control form-control-lg" type="text" name="name" onChange={this.onChange}
                            placeholder={this.props.builtGraph === undefined ? "Untitled Graph" : this.props.builtGraph.name} />
                    </div>
                </form>
                <BaseNetworkViewLevel />
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    builtGraph: state.forexBuilderState.BuiltGraph,
    recentlyViewed: state.loggedInState.recentlyViewed
})

const mapDispatchToProps = {
    addRecentlyViewed: (data: IGraph) => ({type: ADD_RECENTLY_VIEWED, data: data}),
    setViewName: (data: string) => ({type: SET_VIEW_NAME, data: data}),
    setGraph: (data: IGraph) => ({type: SET_GRAPH, data: data}),
    setCurView: (data: IGraph) => ({type: SET_CURR_VIEW, data: data})
}


const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type propsFromRedux = ConnectedProps<typeof connector>;

export default connector(ForexBuilder);
//export default connect(mapStateToProps)(ForexBuilder);