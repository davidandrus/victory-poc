import React from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";
import range from 'lodash/range';
import random from 'lodash/random'

const getData = (min, max) => range(1, 8).map(x => ({
  x,
  y: random(min, max),
}))

const data = range(0, 6).map(i => {
  return (i < 3)
    ? getData(1, 5000)
    : getData(5000, 10000);
});

console.log(data);

export default function Chart() {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      containerComponent={
        <VictoryVoronoiContainer
          voronoiDimension="x"
          labels={(d) => `y: ${d.y}`}
          labelComponent={<VictoryTooltip />}
        />
      }>
      <VictoryGroup>
        {range(0, 3).map(i => (
          <VictoryLine
            labelComponent={<VictoryTooltip />}
            key={i}
            data={data[i]}
            style={{
              data: {
                strokeWidth: 1,
              }
            }}
          />
        ))}
      </VictoryGroup>
      <VictoryGroup>
        {range(3, 6).map(i => (
          <VictoryLine
            labelComponent={<VictoryTooltip />}
            key={i}
            data={data[i]}
            style={{
              data: {
                strokeDasharray: '2, 2',
                strokeWidth: 1,
              }
            }}
          />
        ))}
      </VictoryGroup>
      <VictoryAxis />
      <VictoryAxis dependentAxis />
      <VictoryAxis dependentAxis orientation="right" />
    </VictoryChart>
  );
}
