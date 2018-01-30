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

import CustomTooltip from './CustomTooltip';

export default function Chart(props) {
  const {
    data,
    data2,
  } = props;

  return (
    <VictoryChart
      height={500}
      padding={{ top: 10, left: 50, right: 50, bottom: 50 }}
      width={1000}
      theme={VictoryTheme.grayscale}
      containerComponent={
        <VictoryVoronoiContainer
          voronoiDimension="x"
          labelComponent={<CustomTooltip data={data} />}
          labels={(d) => `y: ${d.y}`}
          voronoiBlacklist={['line']}
          padding={0}
          responsive={false}
        />
      }>
      <VictoryAxis />
      <VictoryAxis dependentAxis />
      <VictoryAxis dependentAxis orientation="right" />

      <VictoryGroup colorScale={VictoryTheme.material.group.colorScale}>
        {data.map((item, i) => (
          <VictoryLine
            data={item}
            key={i}
            name='line'
            style={{
              data: {
                strokeWidth: 2,
              }
            }}
          />
        ))}
      </VictoryGroup>
      <VictoryGroup colorScale={VictoryTheme.material.group.colorScale}>
        {data2.map((item, i) => (
          <VictoryLine
            key={i}
            data={item}
            name='line'
            style={{
              data: {
                strokeDasharray: '4, 4',
                strokeWidth: 2,
              }
            }}
          />
        ))}
      </VictoryGroup>
      <VictoryGroup colorScale={VictoryTheme.material.group.colorScale}>
        {data.map((item, i) => (
          <VictoryScatter
            data={item}
            key={i}
            size={(datum, active) => active ? 5 : 0}
          />
        ))}
      </VictoryGroup>
      <VictoryGroup colorScale={VictoryTheme.material.group.colorScale}>
        {data2.map((item, i) => (
          <VictoryScatter
            data={item}
            key={i}
            size={(datum, active) => active ? 5 : 0}
          />
        ))}
      </VictoryGroup>
    </VictoryChart>
  );
}
