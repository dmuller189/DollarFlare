import React from 'react';
import { IGraph, NodeName } from '../forexGraphStructureAndLogic/GraphDataModelandLogic';
import './ForexRatesTable.css';



interface IProps {
    data: IGraph
}

interface IState {
    filteredNodes: NodeName [],
    sortOrder: "Low" | "High" | "ignore"
}
export default class ForexRatesTable extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            filteredNodes: [],
            sortOrder: "ignore"
        }

    }

    componentDidUpdate() {

    }

    generateList(): {name: string, weight: number} [] {
        let ans: {name: string, weight: number} [] = [];

        

        return ans;
    }


    render() {
        return (
            <div className = "row">
                <div className="table-wrapper-scroll my-scrollbar">
                    <table className="table table-bordered table-striped table-light">

                        <thead>
                            <tr>
                                <th scope="col">Pair</th>
                                <th scope="col">ExchangeRate</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.props.data.nodeList.map(e =>
                                    e.neighbors.map(j => {
                                        return (
                                            <tr>
                                                <td><h5>{e.name + "" + j.toNode.name}</h5></td>
                                                <td><h5>{j.weight + ""}</h5></td>
                                            </tr>
                                        )
                                    }))
                            }
                        </tbody>
                    </table>
                </div>
                <h2 className = "text-center">Filter Table</h2>
            </div>
        )
    }
}