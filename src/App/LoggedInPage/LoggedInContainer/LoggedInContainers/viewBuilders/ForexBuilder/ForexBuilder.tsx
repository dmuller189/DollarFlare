import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../../../App';
import { Graph, IGraph } from './forexGraphStructureAndLogic/GraphDataModelandLogic';
import BaseNetworkViewLevel from './NetworkViewComponent/BaseNetworkViewLevel';
import { ADD_RECENTLY_VIEWED, INCREMENT_ID, SET_RECENT_VIEWED } from '../../../../LoggedInReducer';
import './ForexBuilder.css';
import { UniversalModel } from '../universalModel';
import ForexRatesTable from './ForexRatesTable/ForexRatesTable';
import { NodeName } from './forexGraphStructureAndLogic/GraphDataModelandLogic';


const AllNodeNamesList: NodeName[] = [
    "USD", //US Do
    , "EUR" // EU Euro
    , "JPY" //Japanese Yen
    , "GBP" //British pound
    , "CHF" //swiss franc
    , "AUD" //australian dollar
    , "CNY" //chinese renminbi
    , "HKD" //hong kong dollar
    , "NZD" //new zealand dollar
    , "SEK" //swedish krona
    , "KRW" //south korean won
    , "SGD" //singapore dollar
    , "NOK" //norwegian kronw
    , "MXN" //mexican peso
    , "INR" //Indian rupee
    , "RUB" //russian ruble
    , "ZAR" //south african rand
    , "TRY" //turkish Lira
    , "BRL"
]


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


interface localState {
    stateModel: IGraph,
    namePlaceholder: string

    //for 'Visual settings' (addNode, removeNode)
    selectedNode: string //(NodeName or placeholder)
    addNodeListOpen: boolean
}

class ForexBuilder extends React.Component<propsFromRedux, localState> {

    constructor(props: propsFromRedux) {
        super(props);

        this.state = {
            stateModel: new Graph(),
            namePlaceholder: "name placeholder",
            selectedNode: "Select Node",
            addNodeListOpen: false
        }

        this.onChange = this.onChange.bind(this);
        this.findIGraph = this.findIGraph.bind(this);
        this.updateViewRender = this.updateViewRender.bind(this);
        this.uniqueName = this.uniqueName.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.getNodesInState = this.getNodesInState.bind(this);
        this.getNodesNotInState = this.getNodesNotInState.bind(this);
        //eventually add handlers for add edge, node,.. and the rest
        //and pass these handlers as props to BaseNetworkViewLevel
    }

    /**
     * returns the NodeName corresponding to the input if it exists, or returns undefined 
     * @param maybeName 
     */
    findNodeName(maybeName: string): NodeName | undefined {
        return AllNodeNamesList.find(e => e === maybeName);
    }

    /**
     * Returns an array of the names of the nodes in this components state
     */
    getNodesInState(): NodeName[] {
        return this.state.stateModel.nodeList.map(e => e.name);
    }


    /**
     * returns an array of the names of nodes (NodeNames) that are not in the state model
     * effectively returns AllNodeNames - NodesInState
     */
    getNodesNotInState(): NodeName[] {

        let inStateNodes: NodeName[] = this.getNodesInState();

        return AllNodeNamesList.filter(
            e => {
                return !inStateNodes.includes(e);
            }
        )

    }

    /**
     * Handles the state change from the user adding an edge on the graph
     * @param from the from node of the edge
     * @param to the to node of the edge
     */
    handleAddEdge(from: NodeName, to: NodeName) {
        let newGraph = new Graph();
        newGraph.setModel(this.state.stateModel).setID(this.state.stateModel.ID).addEdge(from, to);

        this.setState({
            stateModel: newGraph
        })
    }

    /**
     * Handles the state change from the user removing an edge from this graph
     * @param from the from node of the edge
     * @param to the too node of the edge
     */
    handleRemoveEdge(from: NodeName, to: NodeName) {
        let newGraph = new Graph();
        newGraph.setModel(this.state.stateModel);
        newGraph.setID(this.state.stateModel.ID);
        newGraph.removeEdge(from, to);

        this.setState({
            stateModel: newGraph
        })

    }


    /**
     * wrapper function to handle adding a node
     */
    handleClickAddNode(event: React.MouseEvent<HTMLElement>): void {
        let inString: string = this.state.selectedNode;
        let node: NodeName | undefined = this.findNodeName(inString);

        if (node !== undefined) {
            this.handleAddNode(node);
        }
    }

    /**
     * Handles the state change from the user adding a node on this graph
     * @param node //adds this node 
     */
    handleAddNode(node: NodeName): void {
        let newGraph = new Graph();
        newGraph.setModel(this.state.stateModel).setID(this.state.stateModel.ID).addNode(node);

        this.setState({
            stateModel: newGraph,
            selectedNode: "Select Node"
        })

    }

    /**
     * Handles the state change from the user removing a node on this graph
     * @param node //removes this node
     */
    handleRemoveNode(node: NodeName) {
        let newGraph = new Graph();
        newGraph.setModel(this.state.stateModel).setID(this.state.stateModel.ID).removeNode(node);

        this.setState({
            stateModel: newGraph
        })
    }

    handleUpdateEdgeWeight(from: NodeName, to: NodeName, weight: number) {

        let newGraph = new Graph();
        newGraph.setModel(this.state.stateModel).setID(this.state.stateModel.ID).setEdgeWeight(from, to, weight);

        this.setState({
            stateModel: newGraph
        })
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

    /**
     * looks through redux stores recently viewed IGraphs and returns the 
     * IGraph with the matching input id
     * @param id 
     */
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

        //extract state and save to redux:


        if (nextModel === undefined) {
            this.updateViewRender();
            return;
        }

        //load extracted data from redux into local state
        if (nextModel != undefined) {
            this.setState({
                stateModel: nextModel
            })
            this.updateViewRender();
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
            // g.printGraph();
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
    }

    onSelectNode(event: React.FormEvent<HTMLInputElement>): void {
        console.log(event.currentTarget);
        this.setState({
            selectedNode: event.currentTarget + ""
        })
    }


    render() {
        return (
            <div className="d-flex">

                <div className="form-group mx-sm-3 mb-2">
                    <br></br>
                    <h1>{this.state.stateModel.name.trim() === "" ? "Untitled" : this.state.stateModel.name}</h1>
                    <form className="form-inline"
                        onSubmit={e => e.preventDefault()}>
                        <div className="form-groun" >
                            <svg id="Nsvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            {/* 
                        //@ts-ignore */}
                            <input id="GName" className="form-control form-control-lg" type="text" name="name" onChange={this.onChange}
                                placeholder={this.state.namePlaceholder}
                            //  onfocus={this.onFocus}
                            // onblur={this.onBlur}
                            //   maxlength="13"
                            />
                        </div>
                    </form>
                    <br />
                    <h3>
                        Visual Settings
                    </h3>
                    <br />


                    {/* begin editing features and interactivity
///////////////////////////////////////////////////////////
*/}
                    <h4>





                        <div className="dropdown show">
                            Add Node -
                            <button className="btn btn-secondary-outline dropdown-toggle dropdownMenuButton" type="button" id="dropdownMenuButton" data-toggle="dropdown show" aria-haspopup="true" aria-expanded="false">
                                {this.state.selectedNode}
                            </button>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="">Another action</a>
                                <a className="dropdown-item" href="">Something else here</a>
                            </div>


                            <button className="btn gobutton" type="button" onClick={this.handleClickAddNode} id="dropdownMenuButton" data-toggle="dropdown show" aria-haspopup="true" aria-expanded="false">
                                Go
                            </button>
                        </div>













                    </h4>



                    {/* end editing features and interactivity
///////////////////////////////////////////////////////////
*/}
                </div>
                <div className="d-flex p-2 bd-highlight">
                    <BaseNetworkViewLevel model={this.state.stateModel} />
                </div>
                <div className="d-flex p-2 bd-highlight">
                    <ForexRatesTable data={this.state.stateModel} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    recentlyViewed: state.loggedInState.recentlyViewed,
    IDcount: state.loggedInState.IDcount
})

const mapDispatchToProps = {
    addRecentlyViewed: (data: IGraph) => ({ type: ADD_RECENTLY_VIEWED, data: data }),
    incrementIDCount: () => ({ type: INCREMENT_ID }),
    setRecentlyViewed: (data: IGraph) => ({ type: SET_RECENT_VIEWED, data: data })
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type propsFromRedux = ConnectedProps<typeof connector>;

export default connector(ForexBuilder);
