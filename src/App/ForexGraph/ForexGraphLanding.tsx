import React from 'react';
import GraphViewController from './FXGraphControllerShell/GraphViewController';



//landing page for when user navigate to the forex graph network view, contianin a
export default class ForexGraph extends React.Component {

    render() {
        return (
            <div>
                Forex grpah home
                <br>
                </br>
                <GraphViewController />
            </div>
        )
    }
}