# `d3-transition-stroke`

> Interpolate a path using `stroke-dasharray`. Based on https://bl.ocks.org/mbostock/5649592

## Install

```sh
npm install d3-transition-stroke
```

## Usage

```js
var transitionStroke = require('d3-transition-stroke')

// ...

var sel = svg.selectAll('path')
    .data(data)

  // ENTER
  sel.enter().append('path')
    .attr('d', d => line(d))

  // ENTER + UPDATE
  sel.transition('stroke')
      .call(transitionStroke)
```

## API

### `transitionStroke(selection)`

#### `selection`

D3 Transition Selection

## TODO

This module implicitly depends on D3 `3.x`, but should be updated to depend on the modules of D3 `4.x`.

## License
[ISC](LICENSE.md)
