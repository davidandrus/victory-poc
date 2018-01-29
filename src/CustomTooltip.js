import React from 'react';
import { VictoryTooltip } from 'victory';

export default function (props) {
  console.log(props);
  return (
    <VictoryTooltip
      {...props}
      dx={4}
      y={200}
      horizontal={true}
      orientation={({ x, y }) => {
        return x > 4 ? 'left' : 'right';
      }}
    />
  );
}