import React from 'react';
import { Flyout } from 'victory';

export default function CustomFlyout(props) {
  const {
    scale,
  } = props;


  return <Flyout {...props} />
}