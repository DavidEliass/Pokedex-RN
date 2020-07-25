import * as React from "react"
import { StyleSheet, View, ImageBackground} from 'react-native';
import Svg, { Path, Defs, Stop, RadialGradient } from "react-native-svg"



function SvgComponent() {
  return (


<View style={styles.patterns}> 

    <Svg width={145} height={145} fill="none" viewBox="0 0 75 75" >
    <Defs>
    <RadialGradient
      id="grad"
      cx="150"
      cy="75"
      rx="85"
      ry="55"
      fx="150"
      fy="75"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset="0" stopColor="#F5F5F5" stopOpacity="0.2" />
      <Stop offset="1" stopColor="#F2F2F2" stopOpacity="0.2" />

    </RadialGradient>
  </Defs>
  <Path
        fill="url(#grad)"
        d="M37.5 0C56.798 0 72.717 14.361 75 32.903H56.697c-2.084-8.605-9.888-15-19.197-15-9.31 0-17.113 6.395-19.197 15H0C2.283 14.361 18.202 0 37.5 0zm19.197 42.097H75C72.717 60.639 56.798 75 37.5 75S2.283 60.639 0 42.097h18.303c2.084 8.605 9.888 15 19.197 15 9.31 0 17.114-6.395 19.197-15z"
      />
      <Path
        fill="#F7F7F780"
        d="M37.5 49.839c6.865 0 12.431-5.524 12.431-12.339 0-6.814-5.566-12.339-12.431-12.339-6.866 0-12.431 5.524-12.431 12.339S30.635 49.839 37.5 49.839z"
      />
    </Svg>

</View>
  )
}

const styles = StyleSheet.create({ 
  patterns: {
    position: 'absolute',
    right: -25
  }
})

export default SvgComponent
