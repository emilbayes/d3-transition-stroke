var d3 = require('d3')

module.exports = function (selection) {
  return selection.attrTween('stroke-dasharray', tween)
}

// NaN is the only value that's not equal to itself
function isNaN (val) {
  return val !== val
}

function tween () {
  // Pick up if a tween is already running and this is an update
  var curLen = parseFloat(d3.select(this).attr('stroke-dasharray'))

  // If the stroke-dasharray was not set, curLen will be NaN
  if (isNaN(curLen)) curLen = 0

  var len = this.getTotalLength()

  return d3.interpolateString([curLen, len], [len, len].join())
}
