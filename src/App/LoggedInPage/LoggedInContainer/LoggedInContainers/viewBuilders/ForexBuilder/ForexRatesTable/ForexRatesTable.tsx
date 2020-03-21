import React from 'react';
import { IGraph } from '../forexGraphStructureAndLogic/GraphDataModelandLogic';




interface IProps {
    data: IGraph
}



export default class ForexRatesTable extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);


    }

    render() {
        return (
            <div>
                <h4>
                    Forex Pairs
                </h4>
                <table className="table table-striped">
                   
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
                                    <td>{e.name + "" + j.toNode.name}</td>
                                    <td>{j.weight + ""}</td>
                                </tr>
                            )}))
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}