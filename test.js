// dummy data
var data = [{x: 5, y: 3, z: 'a'},
            {x: 9, y: 2, z: 'b'},
            {x: 1, y: 1, z: 'c'},
            {x: 4, y: 4, z: 'd'},
            {x: 3, y: 5, z: 'e'}]

// based on inches
var unit = "in";
// use x/72 for points

// point size
var radius = 2/72;

var fontSize = 16/72,
    lineHeight = fontSize * 1.2;

// controlling sub-sizes, not overall size
var margin = {top: 1 * lineHeight,
              right: 1 * lineHeight,
              bottom: 1 * lineHeight,
              left: 1 * lineHeight};
// padding around the data extent
var padding = {top: 3 * radius,
               right: 3 * radius,
               bottom: 3 * radius,
               left: 3 * radius}
// for the actual plotting area
var height = 4,
    width = height * (1 + Math.sqrt(5)) / 2,
    totalWidth = margin.left + padding.left + width +padding.right + margin.right,
    totalHeight = margin.top + padding.top + height + padding.bottom + margin.bottom;

var x = d3.scale.linear()
    .domain(d3.extent(data.map(function(d) { return d.x; })))
    .range([0, width])
    .nice();
var y = d3.scale.linear()
    .domain(d3.extent(data.map(function(d) { return d.y; })))
    .range([height, 0])
    .nice();

var xAxis = d3.svg.axis()
    .tickSize(4/72)
    .tickPadding(2/72)
    .scale(x)
    .ticks(5);

var svg = d3.select("#plot").append("svg")
    .attr("width", totalWidth + unit)
    .attr("height", totalHeight + unit)
    .attr("viewBox", "0 0 " + totalWidth + " " + totalHeight)
svg.append("rect") // top bar
    .attr("width", margin.left + padding.left + width + padding.right)
    .attr("height", margin.top)
    .attr("class", "margin");
svg.append("rect") // left bar
    .attr("width", margin.left)
    .attr("height", margin.top + padding.top + height + padding.bottom)
    .attr("class", "margin");
svg.append("rect") // bottom bar
    .attr("x", margin.left)
    .attr("y", margin.top + padding.top + height + padding.bottom)
    .attr("height", margin.bottom)
    .attr("width", padding.left + width + padding.right)
    .attr("class", "margin");
svg.append("rect") // right bar
    .attr("x", margin.left + padding.left + width + padding.right)
    .attr("y", margin.top)
    .attr("height", padding.top + height + padding.bottom)
    .attr("width", margin.right)
    .attr("class", "margin");
var graph = svg.append("g")
    .attr("transform", "translate(" +
          (margin.left + padding.left) + "," +
          (margin.top + padding.top) + ")")
graph.append("g")
    .attr("transform", "translate(0," + (height + padding.bottom) + ")")
    .attr("class", "x axis")
    .call(xAxis);
graph.selectAll(".point")
    .data(data)
  .enter().append("circle")
    .attr("class", "point")
    .attr("r", radius)
    .attr("cx", function(d) { return x(d.x); })
    .attr("cy", function(d) { return y(d.y); });
