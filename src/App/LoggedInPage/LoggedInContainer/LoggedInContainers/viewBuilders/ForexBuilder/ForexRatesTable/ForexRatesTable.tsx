import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { IGraph } from '../forexGraphStructureAndLogic/GraphDataModelandLogic';



createTheme('default', {
    background: {
        default: '#f0f0f0'
    },
    divider: {
        default: '#073642'
    }
})


////////////////////
//test data
const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
////////////////////


const columns = [
    {
        name: 'Curreny Pair',
        selector: 'pair',
        sortable: true,
    },
    {
        name: 'Exchange Rate',
        selector: 'rate',
        sortable: true,
        right: true,
    },
];

interface IProps {
    data: IGraph
}


/**
 * Renders by reading props into state, state goes into function to format 
 * then goes into component to render.
 * ComponentDidUpdate re-reads props into state, trigering rerender
 */
export default class ForexRatesTable extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);


        this.formatData = this.formatData.bind(this);
    }

    /***
     * reads from props to format row data for the component 
     */
    formatData(): { id: number, pair: string, rate: number }[] {

        let idCount = 0;

        return this.props.data.nodeList.map(e =>
            e.neighbors.map(j => {
                idCount += 1;
                return {id: idCount, pair: "" + e.name + j.toNode.name, rate: j.weight}
                }   
            )
        ).reduce( (a,b) => [...a, ...b], []);
    }


    //updates state on props change
    componentDidUpdate(prevProps: IProps) {
        this.formatData();
    }


    render() {
        return (
            <div>
                <h4>
                    {/* <useTable /> */}
                    <DataTable
                        title='Exchange Rates'

                        //@ts-ignore
                        columns={columns}
                        data={this.formatData()}
                        theme="default"
                    />
                </h4>
            </div>
        )
    }
}