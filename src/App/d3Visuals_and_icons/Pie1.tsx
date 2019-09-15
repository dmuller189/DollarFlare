import React from 'react';
import * as d3 from 'd3';
import './Pie1.css';

interface MyProps {
    data: number[];
    size: number;
}

let exampleFetchGBP: object = {
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

let exampleFetchUSD: object = {
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

export class Pie1 extends React.Component<{}, MyProps> {

    constructor(props: MyProps) {
        super(props);
        this.makeBarChart = this.makeBarChart.bind(this);
    }

    componentDidMount(): void {

        // fetch('http://localhost:8080/api')
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (myJson) {
        //         console.log(JSON.stringify(myJson));
        //     }).catch(function (error) {
        //         console.log(error.message);
        //     })

        this.makeBarChart();
    }

    makeBarChart(): void {

        
        d3.select("#mySVG")
            .append("circle")
            .attr("r", 20)
            .attr("cx", 20)
            .attr("cy", 20)
            .style("fill", "red");
        d3.select("#mySVG")
            .append("text")
            .attr("id", "a")
            .attr("x", 20)
            .attr("y", 20)
            .style("opacity", 0)
            .text("HELLO WORLD");
        d3.select("#mySVG")
            .append("circle")
            .attr("r", 100)
            .attr("cx", 400)
            .attr("cy", 400)
            .style("fill", "lightblue");
        d3.select("#mySVG")
            .append("text")
            .attr("id", "b")
            .attr("x", 400)
            .attr("y", 400)
            .style("opacity", 0)
            .text("Uh, hi.");

        d3.select("#a").transition().delay(1000).style("opacity", 1);
        d3.select("#b").transition().delay(3000).style("opacity", .75);
       
        d3.selectAll("circle")
            .transition()
            .duration(1000)
            .ease(d3.easeBounceOut)
            .attr("cy", 200).attr("cx", 300);

        
    
    }

    render() {
        return (
            <div id="vizcontainer">
                <svg id="mySVG" >
                </svg>
            </div>
        )
    }
}