import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleProp, ViewStyle } from 'react-native'



interface TypeProps {
  color?: string,
  style?: StyleProp<ViewStyle>
}


function DarkType(props: TypeProps) {
  return (
    <Svg width={25} height={25} fill="none" {...props} style={props.style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.217 22.112a9.549 9.549 0 0011.005-9.438 9.549 9.549 0 00-10.595-9.492c2.616 1.982 4.345 5.415 4.345 9.318 0 4.104-1.912 7.688-4.755 9.612zM12.5 25C19.404 25 25 19.404 25 12.5S19.404 0 12.5 0 0 5.596 0 12.5 5.596 25 12.5 25z"
        fill={props.color ?? '#58575F'}
      />
    </Svg>
  );
}

export default DarkType;