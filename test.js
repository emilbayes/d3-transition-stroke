var d3 = require('d3')
var c = require('d3-convention')()
var transitionStroke = require('.')
var insertCss = require('insert-css')

insertCss(`
  path {
    fill: none;
    stroke: red;
    stroke-width: 1px;
  }
`)

var transformLine = d3.svg.line()
    .x(d => c.x(d[0]))
    .y(d => c.y(d[1]))

var data = d3.zip(
  d3.range(0, 0.5, 0.1),
  d3.shuffle(d3.range(0, 1, 0.1))
)

c.svg.selectAll('path')
    .data([data])
  .enter().append('path')
    .attr('d', d => transformLine(d))
  .transition('stroke')
    .ease('linear')
    .duration(2500)
    .call(transitionStroke)

// this is offset to 50% through the full transition
setTimeout(function () {
  data = data.concat(d3.zip(
    d3.range(0.5, 1, 0.1),
    d3.shuffle(d3.range(0, 1, 0.1))
  ))

  c.svg.selectAll('path')
      .data([data])
      .attr('d', d => transformLine(d))
    .transition('stroke')
      .ease('linear')
      .duration(5000) // Since we want to keep the speed smooth, this is 2x previous duration
      .call(transitionStroke)
}, 2500)
