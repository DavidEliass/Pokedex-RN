import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { StyleProp, ViewStyle } from 'react-native'



interface TypeProps {
  color?: string,
  style?: StyleProp<ViewStyle>
}

function ElectricType(props: TypeProps) {
  return (
    <Svg width={25} height={25} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.425.029A.022.022 0 017.445 0h8.81c.01 0 .019.006.021.015l4.047 13.074a.022.022 0 01-.02.028h-5.866a.01.01 0 00-.01.014l3.364 11.841c.006.023-.024.038-.038.02L4.68 7.606a.022.022 0 01.018-.035h5.323a.01.01 0 00.01-.014L7.425.028z"
        fill={props.color ?? '#EED535'}
      />
    </Svg>
  );
}

export default ElectricType;