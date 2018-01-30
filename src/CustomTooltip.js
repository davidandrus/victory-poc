import React from 'react';
import { VictoryTooltip, Line } from 'victory';
import CustomFlyout from './CustomFlyout';

export default function (props) {
  const {
    scale,
  } = props;

  return (
    <g>
      <Line
        x1={scale.x(props.datum.x)}
        x2={scale.x(props.datum.x)}
        y1={0 + 10} // calculated from paddings on VictoryChart
        y2={500 - 50} // calcuated from paddings on VictoryChart
        style={{
          stroke: "rgba(0, 0, 0, .1)",
          strokeWidth: 2
        }} />
      <foreignObject
        dy={20}
        x={scale.x(props.datum.x)}
        y={10}
        width={props.width}
        height={props.height}
      >
        <div style={{
          backgroundColor: 'white',
          boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
          height: 300,
          width: 200,
          marginLeft: -210,
          opacity: .8,
        }}
        >
          <div style={{
            backgroundColor: 'gray',
            borderBottom: '1px solid black',
            padding: 5,
          }}>Mon, May 09, 2018</div>
          <div>
          </div>
        </div>
      </foreignObject>
    </g >
  );


}