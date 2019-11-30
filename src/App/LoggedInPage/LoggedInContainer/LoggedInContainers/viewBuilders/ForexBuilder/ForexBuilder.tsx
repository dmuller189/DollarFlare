import React from 'react';
import ReactTooltip from 'react-tooltip';
import { connect, ConnectedProps  } from 'react-redux';
import {RootState} from '../../../../../App';
import { Graph, IGraph } from './forexGraphStructureAndLogic/GraphDataModelandLogic';
import BaseNetworkViewLevel from './NetworkViewComponent/BaseNetworkViewLevel';
import { ADD_NODE, REMOVE_NODE, ADD_EDGE, 
    REMOVE_EDGE, CLEAR_NODES, CLEAR_EDGES, ADD_ALL_NODES,
    ADD_ALL_EDGES, SET_VIEW_NAME, SET_GRAPH} from './forexGraphStructureAndLogic/ForexReducer';
import {SET_CURR_VIEW, ADD_RECENTLY_VIEWED} from '../../../../LoggedInReducer';
import './ForexBuilder.css';
import UniversalModel from '../universalModel';


//componenet did mount:
// -  read ID from url
// - if model ID exists in recently viewed:
//   - extract that data and set it in the ForexBuilder state curmodel... 
// - if model ID does not exists, initiate default data

//always reads data from curmodel
//on a url change, read the new ID, traverse reently viewed, extract data and set to curModel...

//consider adding model to recently viewed in component did mount


export function containsVal(array: UniversalModel [], val: string): boolean {
    return (array.filter(e => e.name === val).length > 0);
}


class ForexBuilder extends React.Component<propsFromRedux> {

    constructor(props: propsFromRedux) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

     uniqueName = (): boolean => {
         
        const ans = containsVal(this.props.recentlyViewed, this.props.builtGraph.name);
        console.log(ans);
        return ans;
    }


    onChange(event: React.FormEvent<HTMLInputElement>): void {
        this.props.setViewName(event.currentTarget.value); 
        this.uniqueName();       
    }

    componentWillReceiveProps(nextProps: propsFromRedux) {
        //alert("WillRecieveProps function alert url: " + window.location.href);
        //update curodel by going through id and recently viewed
        //to extract model and have values stored  

        //extract ID from url:
        let url:string = window.location.href;
        let rg: string = "\\d{4}$";
        //@ts-ignore
        let id: string | null | number = url.match(rg);

        if (id !== null) {
            id = parseInt(id);
        }

        console.log("ID is " + id);

        //see if model exists:
        let nextModel: IGraph | null = this.props.recentlyViewed.filter(e => e.ID === id)


        //if match model, update ForexeBuilderState cur model
        //from the recently viewed data

        //if new model, do nothing
    }

    componentDidMount() {

        let url: string = window.location.href;


        //find right regex
        let regex: RegExp = /[\n\r].*ID:\s*([^\n\r]*)/;
        let id: RegExpMatchArray  | null = url.match(regex);
       // console.log("url is: " + url);

        //read url:

        let g: IGraph = new Graph();
        g.setName("Untitled Forex Dan");
        g.addNode("AUD");
        g.addNode("JPY");
        g.addNode("USD");
        g.addNode("GBP");

        this.props.setGraph(g);
    }

    componentWillUnmount() {
        
        //tests if name is in recently viewed
        let recentlyViewed: string[] = this.props.recentlyViewed.map(e => e.name);

        this.props.addRecentlyViewed(this.props.builtGraph);
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
