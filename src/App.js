import React, { Component } from "react";
import range from 'lodash/range';
import random from 'lodash/random'

import Chart from "./Chart";

const getData = (min, max) => range(0, 8).map(x => ({
  x,
  y: random(min, max),
}))

const data = range(0, 6).map(i => {
  return (i < 3)
    ? getData(1, 5000)
    : getData(5000, 10000);
});

console.log(data.slice(0, 3));


class App extends Component {
  render() {
    return <div style={{ border: '1px solid red' }}>
      <Chart data={data.slice(0, 3)} data2={data.slice(3, 6)} />
    </div>
  }
}

export default App;
