import React from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
  VictoryVoronoiContainer,
} from "victory";
import range from 'lodash/range';
import random from 'lodash/random'

import CustomTooltip from './CustomTooltip';

const getData = (min, max) => range(1, 8).map(x => ({
  x,
  y: random(min, max),
}))

const data = range(0, 6).map(i => {
  return (i < 3)
    ? getData(1, 5000)
    : getData(5000, 10000);
});

export default function Chart() {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      containerComponent={
        <VictoryVoronoiContainer
          voronoiDimension="x"
          labels={(d) => `y: ${d.y}`}
          labelComponent={<CustomTooltip />}
          voronoiBlacklist={['line']}
        />
      }>
      <VictoryAxis />
      <VictoryAxis dependentAxis />
      <VictoryAxis dependentAxis orientation="right" />

      <VictoryGroup>
        {range(0, 3).map(i => (
          <VictoryLine
            key={i}
            data={data[i]}
            name='line'
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
            key={i}
            data={data[i]}
            name='line'
            style={{
              data: {
                strokeDasharray: '2, 2',
                strokeWidth: 1,
              }
            }}
          />
        ))}
      </VictoryGroup>
      <VictoryGroup>
        {range(0, 3).map(i => (
          <VictoryScatter
            data={data[i]}
            size={(datum, active) => active ? 2 : 0}
          />
        ))}
      </VictoryGroup>
      <VictoryGroup>
        {range(3, 6).map(i => (
          <VictoryScatter
            data={data[i]}
            size={(datum, active) => active ? 2 : 0}
          />
        ))}
      </VictoryGroup>
    </VictoryChart>
  );
}
