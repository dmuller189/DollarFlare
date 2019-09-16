import React from 'react';
import * as d3 from 'd3';


export default class NetDisplay extends React.Component {


    componentDidMount() {

        const graph = {
            "nodes": [
                { "id": "1", "name": "USD"},
                { "id": "2", "name": "GBP"},
                { "id": "4", "name": "EUR"},
                { "id": "8", "name": "JYP"},
                { "id": "16", "name": "GLD"},
                { "id": "11", "name": "SLV"},
                { "id": "12", "name": "AUD"},
                { "id": "14", "name": "CAD"},
                { "id": "18", "name": "MXN"},
                { "id": "116", "name": "BIT"}
            ],
            "links": [
                { "source": "1", "target": "2", "value": 1 },
                { "source": "2", "target": "4", "value": 2 },
                { "source": "4", "target": "8", "value": 3 },
                { "source": "4", "target": "8", "value": 4 },
                { "source": "8", "target": "16", "value": 5 },
                { "source": "16", "target": "1", "value": 6 }
            ]
        }

        let svg = d3.select("#D"),
            width = +svg.attr("width"),
            height = +svg.attr("height");

        var simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function (d) { return d.id; }))
            //.force("charge", d3.forceManyBody().strength(-200))
            .force('charge', d3.forceManyBody()
                .strength(-200)
                .theta(0.8)
                .distanceMax(150)
            )
            // 		.force('collide', d3.forceCollide()
            //       .radius(d => 40)
            //       .iterations(2)
            //     )
            .force("center", d3.forceCenter(width / 2, height / 2));

        function run(graph) {


            let link = svg.append("g")
                //edge color
                .style("stroke", "red")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line").attr('marker-end','url(#arrowhead)')
                
                ;


            // var elabel = svg.append("g")
            //     .attr("class", "labels")
            //     .selectAll("text")
            //     .data(graph.links)
            //     .enter().append("text")
            //     .attr("class", "label")
            //     .text(function (d) { return d.name; });
                

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
                .text(function (d) { return d.name; });

            simulation
                .nodes(graph.nodes)
                .on("tick", ticked);

            simulation.force("link")
                .links(graph.links);

            function ticked() {
                link
                    .attr("x1", function (d) { return d.source.x; })
                    .attr("y1", function (d) { return d.source.y; })
                    .attr("x2", function (d) { return d.target.x; })
                    .attr("y2", function (d) { return d.target.y; });

                node
                    .attr("r", 18) //node radius
                    .style("fill", "#efefef") //fill color
                    .style("stroke", "#424242") //stroke color
                    .style("stroke-width", "1px") //stroke width
                    .attr("cx", function (d) { return d.x; })//x position
                    .attr("cy", function (d) { return d.y; });  //y position

                label
                    //sets position of node label
                    .attr("text-anchor", "middle")
                    .attr("x", function (d) { return d.x; })
                    .attr("y", function (d) { return d.y+3; })
                    //sets font color of node name
                    .style("font-size", "10px").style("fill", "#333");
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
        run(graph);
    }


    render() {
        return (
            <div>
                <svg id="D" width="960" height="600"></svg>
            </div>
        )
    }
}