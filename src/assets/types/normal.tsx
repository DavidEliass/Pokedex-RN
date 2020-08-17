import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleProp, ViewStyle } from 'react-native'

interface TypeProps {
  color?: string,
  style?: StyleProp<ViewStyle>
}

function TypeNormal(props: TypeProps) {
  return (
    <Svg width={25} height={25} fill="none" {...props} style={props.style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 12.5C25 19.404 19.404 25 12.5 25S0 19.404 0 12.5 5.596 0 12.5 0 25 5.596 25 12.5zm-5.357 0a7.143 7.143 0 11-14.286 0 7.143 7.143 0 0114.286 0z"
        fill={props.color ?? '#9DA0AA'}
      />
    </Svg>
  );
}

export default TypeNormal;