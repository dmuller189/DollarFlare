import React from 'react';
import ReactTooltip from 'react-tooltip';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../../../App';
import { Graph, IGraph } from './forexGraphStructureAndLogic/GraphDataModelandLogic';
import BaseNetworkViewLevel from './NetworkViewComponent/BaseNetworkViewLevel';
import {
    ADD_NODE, REMOVE_NODE, ADD_EDGE,
    REMOVE_EDGE, CLEAR_NODES, CLEAR_EDGES, ADD_ALL_NODES,
    ADD_ALL_EDGES, SET_VIEW_NAME, SET_GRAPH
} from './forexGraphStructureAndLogic/ForexReducer';
import { SET_CURR_VIEW, ADD_RECENTLY_VIEWED, INCREMENT_ID } from '../../../../LoggedInReducer';
import './ForexBuilder.css';
import { UniversalModel } from '../universalModel';


//TODO: 



//componenet did mount:
// -  read ID from url
// - if model ID exists in recently viewed:
//   - extract that data and set it in the ForexBuilder state curmodel... 
// - if model ID does not exists, initiate default data

//always reads data from curmodel
//on a url change, read the new ID, traverse reently viewed, extract data and set to curModel...

//consider adding model to recently viewed in component did mount

//on component willUnMount(), don't just add a new entry to recently viewed,
// rather update the history if it already exists.


export function containsVal(array: UniversalModel[], val: string): boolean {
    return (array.filter(e => e.name === val).length > 0);
}


class ForexBuilder extends React.Component<propsFromRedux> {

    constructor(props: propsFromRedux) {
        super(props);
        this.onChange = this.onChange.bind(this);

        this.findIGraph = this.findIGraph.bind(this);
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

    findIGraph(id: string): IGraph | undefined {

        let nextModel: IGraph | undefined = this.props.recentlyViewed.find(function (view: any) {
            return view.ID + "" == id;
        })

        return nextModel;
    }

    componentWillReceiveProps(nextProps: propsFromRedux) {
        //alert("WillRecieveProps function alert url: " + window.location.href);
        //update curodel by going through id and recently viewed
        //to extract model and have values stored  

        //extract ID from url:
        let url: string = window.location.href;
        let rg: string = "\\d{4}$";
        //@ts-ignore
        let id: string | null = url.match(rg);

        //console.log("ID is " + id);

        // //see if model exists:
        // let nextModel: UniversalModel | undefined;

        // nextModel = this.props.recentlyViewed.find(function(graph){

        //     graph.ID == id;
        // })

        // //if found 
        // if (nextModel != undefined) {

        // }

        let nextModel: IGraph | undefined = this.findIGraph(id + "");


        if (nextModel === undefined) {
            return;
        } else {
            //console.log("next model is " + nextModel.ID);
            this.props.setGraph(nextModel);
        }


        //if match model, update ForexeBuilderState cur model
        //from the recently viewed data

        //if new model, do nothing
    }


    //same process as above.  check url, if new, create new set up, if exists, render that view
    componentDidMount() {

        console.log("in FXBuilder, IDcount is " + this.props.IDcount);

        let url: string = window.location.href;

        //find right regex
        let rg: string = "\\d{4}$";
        //@ts-ignore
        let id: string | null = url.match(rg);
        console.log("mounting id is " + id);

       // console.log("in mounting, ");
        let nextModel: IGraph | undefined = this.findIGraph(id + "");
       // console.log(nextModel);

        if (nextModel === undefined) {
            let g: IGraph = new Graph();
            g.setName("Untitled Forex Dan");
            g.addNode("AUD");
            g.addNode("JPY");
            g.addNode("USD");
            g.addNode("GBP");
            g.setID(this.props.IDcount);
            this.props.setGraph(g);
            this.props.incrementIDCount();
        } else {
            //convert recently viewed data to curmodel
            this.props.setGraph(nextModel);
        }

    }

    componentWillUnmount() {

        let id = this.props.builtGraph.ID;
        console.log("unmounting ID: " + id);

        let nextModel: IGraph | undefined = this.findIGraph(id + "");
        //console.log("---NM---- " + nextModel);

        if (nextModel === undefined) {
           console.log("next model is " + this.props.builtGraph.ID);
            this.props.addRecentlyViewed(this.props.builtGraph);
        } else {
            //update recently viewed data with built graph data,
            //move this entry to top of list of recently viewed
        }

        //tests if name is in recently viewed
        // let recentlyViewed: string[] = this.props.recentlyViewed.map(e => e.name);

        // this.props.addRecentlyViewed(this.props.builtGraph);
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
    recentlyViewed: state.loggedInState.recentlyViewed,
    IDcount: state.loggedInState.IDcount
})

const mapDispatchToProps = {
    addRecentlyViewed: (data: IGraph) => ({ type: ADD_RECENTLY_VIEWED, data: data }),
    setViewName: (data: string) => ({ type: SET_VIEW_NAME, data: data }),
    setGraph: (data: IGraph) => ({ type: SET_GRAPH, data: data }),
    setCurView: (data: IGraph) => ({ type: SET_CURR_VIEW, data: data }),
    incrementIDCount: () => ({type: INCREMENT_ID})
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type propsFromRedux = ConnectedProps<typeof connector>;

export default connector(ForexBuilder);
