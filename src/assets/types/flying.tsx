import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleProp, ViewStyle } from 'react-native'

interface TypeProps {
  color?: string,
  style?: StyleProp<ViewStyle>
}


function TypeFlying(props: TypeProps) {
  return (
    <Svg width={25} height={25} fill="none" {...props} style={props.style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.726 23.333c3.662 0 6.798-2.035 8.092-4.92.016-.036-5.197 1.354-5.03.863.074-.22 3.27-1.387 5.597-2.748 1.338-.783 1.954-2.44 1.954-2.44s-2.254 1.095-3.393 1.373c-2.297.56-4.319.499-4.319.44 0-.125 3.357-.763 8.023-3.606 2.194-1.338 2.79-3.64 2.79-3.64s-2.413 1.436-3.871 1.91c-3.459 1.126-6.615 1.465-6.615 1.313 0-.326 2.778-1.09 5.723-2.517 1.53-.742 2.857-1.711 4.394-2.79C24.585 4.809 25 1.668 25 1.668s-2.48 1.6-3.69 2.13C16.316 5.99 11.906 7.14 8.726 7.388 3.926 7.764 0 11.113 0 15.461c0 4.348 3.907 7.872 8.726 7.872z"
        fill={props.color ?? '#748FC9'}
      />
    </Svg>
  );
}

export default TypeFlying;