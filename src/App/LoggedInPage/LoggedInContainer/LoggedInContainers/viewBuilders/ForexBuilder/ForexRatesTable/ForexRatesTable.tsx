import React from 'react';
import DataTable from 'react-data-table-component';
import { IGraph } from '../forexGraphStructureAndLogic/GraphDataModelandLogic';

interface IProps {
    data: IGraph
}

// const colNames = [{
//     name: "Pair",
// },
// {
//     name: "Rate"
// }
// ];

// const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' } ];



// interface IState {
//     cols: typeof colNames
// }
////////////////////
const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' } ];

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];

////////////////////

export default class ForexRatesTable extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);

        // this.state = {
        //     cols: colNames
        // }

        this.formatData = this.formatData.bind(this);
    }

    /***
     * reads from props to format row data for the component 
     */
    formatData() {

    }

    //updates state on props change
    componentDidUpdate(prevProps: IProps) {
        this.formatData();
    }


    render() {
        return(
            <div>
                <h4>

                  {/* <useTable /> */}
                    Forex table 
                   <DataTable
                    title = 'Exchange Rates'

                    //@ts-ignore
                    columns={columns}
                    data={data}
                    /> 
                </h4>
            </div>
        )
    }
}