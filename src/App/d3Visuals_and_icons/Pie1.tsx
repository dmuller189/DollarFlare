import React from 'react';
import * as d3 from 'd3';
import './Pie1.css';


interface ITicker {
    "success": boolean,
    "historical": boolean,
    "date": string,
    "timestamp": number,
    "base": string,
    "rates": object
}

let exampleFetchGBP = {
    "success": true,
    "historical": true,
    "date": "2013-12-24",
    "timestamp": 1387929599,
    "base": "GBP",
    "rates": {
        "USD": 1.636492,
        "EUR": 1.196476,
        "CAD": 1.739516
    }
}

let exampleFetchUSD = {
    "success": true,
    "historical": true,
    "date": "2019-09-09",
    "timestamp": 1387929599,
    "base": "USD",
    "rates": {
        "GBP": 0.81,
        "EUR": 0.90,
        "CAD": 1.32
    }
}

let exampleFetchJYP = {
    "success": true,
    "historical": true,
    "date": "2019-09-09",
    "timestamp": 1387929599,
    "base": "JYP",
    "rates": {
        "GBP": 2.81,
        "EUR": 4.90,
        "CAD": 3.32
    }
}

// let tickers: ITicker[] = [exampleFetchGBP, exampleFetchUSD, exampleFetchJYP];

export class Pie1 extends React.Component {

    constructor(props: any) {
        super(props);
        this.makeBarChart = this.makeBarChart.bind(this);
    }

    componentDidMount() {
        this.makeBarChart();
    }

    makeBarChart() {

        let width = 300, height = 300
        let nodes = [{}, {}, {}, {}, {}]

        let simulation = d3.forceSimulation(nodes)
            .force('charge', d3.forceManyBody().strength(-20))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .on('tick', ticked);


        function ticked() {
            var u = d3.select('#MS')
                .selectAll('circle')
                .data(nodes)

            u.enter()
                .append('circle')
                .attr('r', 5)
                // @ts-ignore
                .merge(u)
                .attr('cx', function (d: any) {
                    return d.x
                })
                .attr('cy', function (d: any) {
                    return d.y
                })

            u.exit().remove()
        }




    }






    render() {
        return (
            <div id="content">
                <svg id="MS" width="300" height="300">
                </svg>
            </div>
        )
    }
}