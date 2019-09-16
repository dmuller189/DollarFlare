import React from 'react';
import * as d3 from 'd3';

const graphEx = {
    "nodes": [
        { "id": 1, "name": "USD" },
        { "id": 2, "name": "GBP" },
        { "id": "4", "name": "EUR" },
        { "id": "8", "name": "JYP" },
        { "id": "16", "name": "GLD" },
        { "id": "11", "name": "SLV" },
        { "id": "12", "name": "AUD" },
        { "id": "14", "name": "CAD" },
        { "id": "18", "name": "MXN" },
        { "id": "116", "name": "BIT" }
    ],
    "links": [
        { "source": 2, "target": 1, "value": 1 },
       // { "source": "1", "target": "2", "value": 1 },
        { "source": "2", "target": "4", "value": 2 },
        // { "source": "4", "target": "8", "value": 3 },
        // { "source": "4", "target": "8", "value": 4 },
        // { "source": "8", "target": "16", "value": 5 },
        // { "source": "16", "target": "1", "value": 6 }
    ]
}

/*
eventuall ths will just be an instance graph
coming fron the main engine.  i.e. on
landing page, it will predefine data, then
pass is into the props of GraphModel or the like to render
*/
export default class NetDisplay extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            width: 900,
            height: 500,
            graph: graphEx
        }
    }

    buildGraph() {
        let svg = d3.select("#"+this.props.gid),
            width = +svg.attr("width"),
            height = +svg.attr("height");

        var simulation = d3.forceSimulation()

            .force("link", d3.forceLink().id(function (d) { return d.id; })
                .distance(120))
            .force("charge", d3.forceManyBody().strength(-30))
            // .force('charge', d3.forceManyBody()
            //     .strength(-400)
            //     .theta(0.4)
            //     .distanceMax(100)
            // )
            .force('collide', d3.forceCollide()
                .radius(d => 5)
                .iterations(1)
            )
            .force("center", d3.forceCenter(width / 2, height / 2))
            ;

        function run(graph) {

            let link = svg.append("g")
                //edge color
                .style("stroke", "black")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line").attr('marker-end', 'url(#arrowhead)');

            let node = svg.append("g")
                .attr("class", "nodes")
                .selectAll("circle")
                .data(graph.nodes)
                .enter().append("circle")
                .attr("r", 2)
                .call(d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended));

            let label = svg.append("g")
                .attr("class", "labels")
                .selectAll("text")
                .data(graph.nodes)
                .enter().append("text")
                .attr("class", "label")
                .attr("pointer-events", "none")
                .text(function (d) { return d.name; })
                ;

            simulation
                .nodes(graph.nodes)
                .on("tick", ticked);

            //event handler on mouse enter
            node
                .on("mouseenter", function (d) {
                    d3.select(this).style("r", 30);
                });

            node
                .on("mouseleave", function (d) {
                    d3.select(this).style("r", 25)
                    
                });


            simulation.force("link")
                .links(graph.links);

            function ticked() {
                

                node
                    .attr("r", 25) //node radius
                    .style("fill", "rgb(162, 179, 206)") //fill color
                    .style("stroke", "#424242") //stroke color
                    .style("stroke-width", "1px") //stroke width
                    .attr("cx",function (d) {return (d.x < 30) ? 30 : (d.x > 800 ? 800: d.x);}) 
                    .attr("cy", function (d) {return (d.y < 50) ? 50 : (d.y>450 ? 450: d.y);});  //y position

                            //eventually abstract boundary conditions to helper from values from state

                label
                    //sets position of node label
                    .attr("text-anchor", "middle")
                    .attr("x", function (d)  {return (d.x < 30) ? 30 : (d.x > 800 ? 800: d.x);})
                    .attr("y", function (d)  {return (d.y < 50) ? 50 : (d.y>450 ? 450: d.y);})
                    //sets font color of node name
                    .style("font-size", "13px").style("fill", "#333")
                    .style("font-family", "open-sans");

                link
                    .attr("x1", function (d) {return (d.source.x < 30) ? 30 : (d.source.x > 800 ? 800: d.source.x);})
                    .attr("y1", function (d)  {return (d.source.y < 50) ? 50 : (d.source.y>450 ? 450: d.source.y);})
                    .attr("x2", function (d) {return (d.target.x < 30) ? 30 : (d.target.x > 800 ? 800: d.target.x);})
                    .attr("y2", function (d)  {return (d.target.y < 50) ? 50 : (d.target.y>450 ? 450: d.target.y);});
            }
        }

        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart()
            d.fx = d.x
            d.fy = d.y
            //  simulation.fix(d);
        }

        function dragged(d) {
            d.fx = d3.event.x
            d.fy = d3.event.y
            //  simulation.fix(d, d3.event.x, d3.event.y);
        }

        function dragended(d) {

            d.fx = d3.event.x
            d.fy = d3.event.y
            if (!d3.event.active) simulation.alphaTarget(0);
            //simulation.unfix(d);
        }
        run(this.state.graph);
    }

    componentDidMount() {

       // console.log(this.props.gid)
        this.buildGraph();
    }


    render() {
        return (
            <div id="myDIV">
                <h3>
                    Forex Networks Made Simple
                </h3>
                <svg id={this.props.gid} width={this.state.width} height={this.state.height}></svg>
            </div>
        )
    }
}