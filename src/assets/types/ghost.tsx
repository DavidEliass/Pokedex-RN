import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleProp, ViewStyle } from 'react-native'

interface TypeProps {
  color?: string,
  style?: StyleProp<ViewStyle>
}


function TypeGhost(props: TypeProps) {
  return (
    <Svg width={25} height={25} fill="none" {...props} style={props.style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.015 24.913c-2.255.116-4.837.116-5.714 0C5.458 24.013 0 19.01 0 12.246S5.596 0 12.5 0 25 5.483 25 12.246c0 3.146-1.21 6.014-3.2 8.183-.54.589.2 1.002.954 1.422.739.412 1.489.83 1.053 1.426-.48.657-3.085 1.498-5.792 1.636zm-7.273-14.198c0 1.057-.874 1.914-1.953 1.914-1.079 0-1.953-.857-1.953-1.914 0-.708.393-1.327.978-1.658a1.722 1.722 0 001.72 1.658h1.208zm6.054-1.658a1.722 1.722 0 01-1.721 1.658h-1.208c0 1.057.875 1.914 1.953 1.914 1.079 0 1.953-.857 1.953-1.914 0-.708-.393-1.327-.977-1.658z"
        fill={props.color ?? '#556AAE'}
      />
    </Svg>
  );
}

export default TypeGhost;