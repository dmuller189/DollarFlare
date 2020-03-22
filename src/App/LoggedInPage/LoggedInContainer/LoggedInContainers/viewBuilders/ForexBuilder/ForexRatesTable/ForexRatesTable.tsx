import React from 'react';
import { IGraph, NodeName } from '../forexGraphStructureAndLogic/GraphDataModelandLogic';
import './ForexRatesTable.css';

/**
 * TODO - GUI for filtering
 */


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
            filteredNodes: ["GBP", "USD", "JPY"],
            sortOrder: "ignore"
        }

        this.genTableData = this.genTableData.bind(this);
    }


    /**
     * Builds a renderable list of forex pair-values for each edge existing on the graph
     *  - filtered by selected nodes and sort order by weight of edge
     */
    genTableData() : {namefrom: NodeName, nameto: NodeName, weight: number} [] {

        let ans:  {namefrom: NodeName, nameto: NodeName, weight: number}[];
        ans =  this.props.data.nodeList.map(e =>
            e.neighbors.map(j => {
                return (
                    {namefrom: e.name, nameto: j.toNode.name, weight: j.weight}
                )
            }))
            .reduce( (a,b) => [...a,...b],[])   
            .filter(g => this.state.filteredNodes.includes(g.namefrom) || this.state.filteredNodes.includes(g.nameto));


            if(this.state.sortOrder === "ignore") {
                return ans;
            }

            this.state.sortOrder === "High" ? ans.sort( (a,b) => a.weight-b.weight) : ans.sort((a,b) => b.weight - a.weight);

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
                            this.genTableData().map(j => {
                                return (
                                    <tr>
                                        <td><h5>{"" + j.namefrom+j.nameto}</h5></td>
                                        <td><h5>{j.weight}</h5></td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                <h2 className = "text-center">Filter Table</h2>
            </div>
        )
    }
}