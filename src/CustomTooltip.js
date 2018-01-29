import React from 'react';
import { VictoryTooltip } from 'victory';
import CustomFlyout from './CustomFlyout';

export default function (props) {
  console.log(props);
  return (
    <VictoryTooltip
      {...props}
      dx={4}
      flyoutComponent={<CustomFlyout scale={props.scale} />}
      horizontal={true}
      orientation={({ x, y }) => {
        return x > 4 ? 'left' : 'right';
      }}
    />
  );
}