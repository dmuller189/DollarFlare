import React from 'react';
import * as d3 from 'd3';
import './Pie1.css';

interface MyProps {
    data: number[];
    size: number;
}

export class Pie1 extends React.Component<{}, MyProps> {

    constructor(props: object) {
        super(props);
        this.makeBarChart = this.makeBarChart.bind(this);
    }

    componentDidMount(): void {
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
        d3.selectAll("circle").transition().duration(1000).attr("cy", 200).attr("cx", 300);

        var sampleArray = [423, 124, 66, 424, 58, 10, 900, 44, 1];
        var qScale = d3.scaleQuantile().domain(sampleArray).range([0, 1, 2]);
        qScale(423);
        qScale(20);
        qScale(10000);
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