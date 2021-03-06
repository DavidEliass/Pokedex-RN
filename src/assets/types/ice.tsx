import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleProp, ViewStyle } from 'react-native'

interface TypeProps {
  color?: string,
  style?: StyleProp<ViewStyle>
}

function TypeIce(props: TypeProps) {
  return (
    <Svg width={25} height={25} fill="none" {...props}>
      <Path
        d="M12.128 4.65l-6.21-3.075.188 6.873 5.863 2.904.159-6.702zM19.021 8.532l-.079-6.929-6.038 3.288.074 6.542 6.043-2.901zM19.018 15.943L25 12.52l-5.985-3.148-5.983 3.143 5.986 3.427zM11.968 12.521l-5.982 3.422L0 12.516l5.983-3.143 5.985 3.148zM19.111 23.362l-6.209-3.075.159-6.701 5.863 2.903.187 6.873zM6.054 16.496l.08 6.929 6.038-3.288-.075-6.542-6.043 2.901z"
        fill={props.color ?? '#61CEC0'}
      />
    </Svg>
  );
}

export default TypeIce;