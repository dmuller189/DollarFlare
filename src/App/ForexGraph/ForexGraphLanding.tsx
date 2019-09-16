import React from 'react';
// import GraphViewController from './FXGraphControllerShell/GraphViewController';
import './ForexGraphLanding.css';
import GraphModel from './FXGraphModel/GraphModel'




// landing page for when user navigate to the forex graph network view, contianin 
// all styling, formatting, and functionality, including the GraphViewController shell and the d3 model itself

export default class ForexGraph extends React.Component {

    render() {
        return (
            <div>
                Forex graph landing page, controller shell bellow
                <br>
                </br>
        {/*
        //@ts-ignore */}
                <GraphModel />
            </div>
        )
    }
}