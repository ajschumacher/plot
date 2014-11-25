// based on inches
var unit = "in";
// use x/72 for points

var fontSize = 16/72,
    lineHeight = fontSize * 1.2;

// controlling sub-sizes, not overall size
var margin = {top: 1 * lineHeight,
              right: 1 * lineHeight,
              bottom: 1 * lineHeight,
              left: 1 * lineHeight};
// for the actual plotting area
var width = 6,
    height = 4;
    totalWidth = margin.left + width + margin.right,
    totalHeight = margin.top + height + margin.bottom;

var svg = d3.select("#plot").append("svg")
    .attr("width", totalWidth + unit)
    .attr("height", totalHeight + unit)
    .attr("viewBox", "0 0 " + totalWidth + " " + totalHeight)
svg.append("rect")
    .attr("width", margin.left + width)
    .attr("height", margin.top)
    .attr("class", "margin");
svg.append("rect")
    .attr("width", margin.left)
    .attr("height", margin.top + height)
    .attr("class", "margin");
svg.append("rect")
    .attr("x", margin.left)
    .attr("y", margin.top + height)
    .attr("height", margin.bottom)
    .attr("width", width)
    .attr("class", "margin");
svg.append("rect")
    .attr("x", margin.left + width)
    .attr("y", margin.top)
    .attr("height", height)
    .attr("width", margin.right)
    .attr("class", "margin");
var graph = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
graph.append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "teal")
    .style("opacity", 0.01);
