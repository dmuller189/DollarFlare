import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../../../App';
import { Graph, IGraph } from './forexGraphStructureAndLogic/GraphDataModelandLogic';
import BaseNetworkViewLevel from './NetworkViewComponent/BaseNetworkViewLevel';
import { ADD_RECENTLY_VIEWED, INCREMENT_ID, SET_RECENT_VIEWED } from '../../../../LoggedInReducer';
import './ForexBuilder.css';
import { UniversalModel } from '../universalModel';


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

//TODO:
//
//The functionality of component didnmount had to be put in componentDidUpdate / willRP 
// in order to be able to traver forex to forex, not having to leave the builder page
// all together, and some logic may be removed from component did mount

interface localState {
    stateModel: IGraph,
    namePlaceholder: string
}

class ForexBuilder extends React.Component<propsFromRedux, localState> {

    constructor(props: propsFromRedux) {
        super(props);

        this.state = {
            stateModel: new Graph(),
            namePlaceholder: "name placeholder"
        }

        this.onChange = this.onChange.bind(this);
        this.findIGraph = this.findIGraph.bind(this);
        this.updateViewRender = this.updateViewRender.bind(this);
        this.uniqueName = this.uniqueName.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        //eventually add handlers for add edge, node,.. and the rest
        //and pass these handlers as props to BaseNetworkViewLevel
    }

    onBlur() {
        console.log("on blud");
        this.setState({
            namePlaceholder: this.state.namePlaceholder === "" ? "click to edit" : ""
        })
    }

    onFocus() {
        console.log("on focus");
        this.setState({
            namePlaceholder: this.state.namePlaceholder === "" ? "click to edit" : this.state.stateModel.name
        })
    }

    /**
     * Determines whether the current view name is unique in the session
     */
    uniqueName = (): boolean => {

        const ans = containsVal(this.props.recentlyViewed, this.state.stateModel.name);
        //console.log(ans);
        return ans;
    }

    /**
     * Handles changing the view's name by keyboard input
     * @param event key board event 
     */
    onChange(event: React.FormEvent<HTMLInputElement>): void {

        this.setState({
            stateModel: this.state.stateModel.setName(event.currentTarget.value)
        });
        this.updateViewRender();
    }

    findIGraph(id: string): IGraph | undefined {

        let nextModel: IGraph | undefined = this.props.recentlyViewed.find(function (view: any) {
            return view.ID + "" == id;
        })

        return nextModel;
    }

    updateViewRender() {
        let id = this.state.stateModel.ID;
        let nextModel: IGraph | undefined = this.findIGraph(id + "");
        nextModel === undefined ?
            this.props.addRecentlyViewed(this.state.stateModel) : this.props.setRecentlyViewed(this.state.stateModel);
    }

    // To Cover / DO:
    // - loading a different 'createForex' with different ID (switching between 2 forex views)
    //    - extract state in prev build and save to redux
    //    - load extracted data from next build and set state
    // - CONSIDER:
    //   - switching a newly created view(local id will equal redux id counter-1) (i.e will not exist is recently viewed)
    // vs
    //   - switching from a previously created view into another existing view
    componentDidUpdate(prevProps: propsFromRedux, prevState: localState) {

        //extract ID from url:
        let url: string = window.location.href;
        let rg: string = "\\d{4}$";
        //@ts-ignore
        let id: string | null = url.match(rg);

        //prevents infinite looping, don't delete
        if (prevState.stateModel.ID + "" == id) {
            return;
        }

        let nextModel: IGraph | undefined = this.findIGraph(id + "");
        console.log("Found " + id);

        //extract state and save to redux:


        if (nextModel === undefined) {
            this.updateViewRender();
            return;
        }

        //load extracted data from redux into local state
        if (nextModel != undefined) {

            console.log("in did update to new build: ");
            console.log(this.props.recentlyViewed.map(e => e.name));

            this.setState({
                stateModel: nextModel
            })
            this.updateViewRender();

            //arange side bars:
            // selected project moved to top of list

        }
    }
    //same process as above.  check url, if new, create new set up, if exists, render that view
    componentDidMount() {
        let url: string = window.location.href;
        let rg: string = "\\d{4}$";
        //@ts-ignore
        let id: string | null = url.match(rg);
        let nextModel: IGraph | undefined = this.findIGraph(id + "");

        //if model has not been created... set up a new one
        if (nextModel === undefined) {
            let g: IGraph = new Graph();
            g.setName("Untitled");
            g.addNode("AUD");
            g.addNode("JPY");
            g.addNode("USD");
            g.addNode("GBP");
            g.addEdge("AUD", "JPY");
            g.printGraph();
            //consider having ID set in the graph constructor, then making
            //it read only
            g.setID(this.props.IDcount);
            this.setState({
                stateModel: g
            })
            this.props.incrementIDCount();
        } else {
            //convert recently viewed data to curmodel
            this.setState({
                stateModel: nextModel
            })
        }

    }
    componentWillUnmount() {

        this.updateViewRender();
        // if (nextModel === undefined) {
        //     this.props.addRecentlyViewed(this.props.builtGraph);
        // } else {
        //     this.props.setRecentlyViewed(this.props.builtGraph);
        // }
    }

    render() {
        return (
            <div className="d-flex">

                <div className="form-group mx-sm-3 mb-2">
                    <br></br>
                    <h1>{this.state.stateModel.name.trim() === "" ? "Untitled" : this.state.stateModel.name  }</h1>
                    <form className="form-inline"
                        onSubmit={e => e.preventDefault()}>
                        <div className="form-groun" >
                            <svg id="Nsvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            {/* 
                        //@ts-ignore */}
                            <input id="GName" className="form-control form-control-lg" type="text" name="name" onChange={this.onChange}
                                placeholder={this.state.namePlaceholder}
                                onfocus={this.onFocus}
                                onblur={this.onBlur}
                                maxlength="13"
                            />
                        </div>
                    </form>
                    <br/>
                    <h3>
                        Visual Settings
                    </h3>
                    {/* visual settings to include:
                    - edge type (straing vs rounded)
                    - force vs static vs plain
                    represented as drop down boxes in state
                    */}
                </div>
                <div className="d-flex p-2 bd-highlight">
                <BaseNetworkViewLevel model={this.state.stateModel} />
                
                </div>

                
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    //builtGraph: state.forexBuilderState.BuiltGraph,
    recentlyViewed: state.loggedInState.recentlyViewed,
    IDcount: state.loggedInState.IDcount
})

const mapDispatchToProps = {
    addRecentlyViewed: (data: IGraph) => ({ type: ADD_RECENTLY_VIEWED, data: data }),
    //setViewName: (data: string) => ({ type: SET_VIEW_NAME, data: data }),
    //setGraph: (data: IGraph) => ({ type: SET_GRAPH, data: data }),
    //setCurView: (data: IGraph) => ({ type: SET_CURR_VIEW, data: data }),
    incrementIDCount: () => ({ type: INCREMENT_ID }),
    setRecentlyViewed: (data: IGraph) => ({ type: SET_RECENT_VIEWED, data: data })
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type propsFromRedux = ConnectedProps<typeof connector>;

export default connector(ForexBuilder);
