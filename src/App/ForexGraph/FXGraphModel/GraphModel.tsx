import React from 'react';
import GraphViewController from '../FXGraphControllerShell/GraphViewController';


let avalableTokens: string[] = [
    "USD",
    "EUR",
    "GBP",
    "CAD",
    "RUB",
]

interface IState {
    pairs: string[],
    date: string,
    selectAllEdges: string,
    arbitragePath: string []
}

interface IProps {
    val?: string 
}

export default class GraphModel extends React.Component<IProps, IState> {


    constructor(props: any) {
        super(props);

        this.state = {
            pairs: ["USDtoEURat1.0", "USDtoJPYat2.1", "goldtosilverat3.2"],
            date: "09/15/2019",
            selectAllEdges: "false",
            arbitragePath: ["USDtoEUR", "EURtoUSD"]
        }

        this.setPairs = this.setPairs.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setSelectAllEdges = this.setSelectAllEdges.bind(this);
        this.setArbitragePath = this.setArbitragePath.bind(this);
    }


    addPair(pair: string): void {
        // @ts-ignore
        let newPairs = this.state.pairs.push(pair);
    }


    setPairs(pairs: string[]): void {
        this.setState({pairs: pairs});
    }

    setDate(date: string): void {
        this.setState({date: date})
    }

    setSelectAllEdges(val: string): void {
        this.setState({selectAllEdges: val});
    }

    setArbitragePath(path: string[]): void {
        this.setState({arbitragePath: path})
    }

    render() {
        return (
            
            // @ts-ignore  
            <GraphViewController setPairs={this.setPairs} setDate={this.setDate} setSelectAllEdges={this.setSelectAllEdges} setArbitragePath={this.setArbitragePath}  
           // @ts-ignore
            pairs={this.state.pairs} date={this.state.date} selectAllEdges={this.state.selectAllEdges} arbitragePath={this.state.arbitragePath} />
        )
    }
}