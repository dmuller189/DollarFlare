import React from 'react';
import { connect } from 'react-redux';
import { Graph, IGraph } from './forexGraphStructureAndLogic/GraphDataModelandLogic';
import BaseNetworkViewLevel from './NetworkViewComponent/BaseNetworkViewLevel';


class ForexBuilder extends React.Component {



    onChange(event: any): void {
        
        let str = event.target.value;
        console.log(str);
        //@ts-ignore
        //this.props.updateName(str);

        this.props.dispatch({
            type: "SET_VIEW_NAME",
            data: {
                viewName: str
            }
        })

    }

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
        this.props.dispatch({
            type: "ADD_RECENTLY_VIEWED",
            data: {
                data: g
            }
        });
    }

    render() {
        return (
            <div>
                <br>
                </br>
                <form>
                    <div className="form-groun" >
                    <input className="form-control" type="text" name="name" onChange={this.onChange}
                    //@ts-ignore
                    placeholder={this.props.projName}/>
                    </div>
                </form>


                <h1>
                    {
                        //@ts-ignore
                        this.props.projName
                    }
                </h1>
                <BaseNetworkViewLevel />
            </div>
        )
    }
}


function mapStateToProps(state: any) {
    return {
        projName: state.forexBuilderState.FXName
    }
}

// function mapDispatchToProps(dispatch: any) {
//     return {
//         updateProjName: (name: string) => dispatch({
//             type: "SET_VIEW_NAME",
//             data: name
//         })
//     }
// }

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         updateName: (projName: string) => {dispatch(
//             {type: "SET_VIEW_NAME", 
//             viewName: projName}
//             )} 
//     }
// }

export default connect(mapStateToProps)(ForexBuilder);