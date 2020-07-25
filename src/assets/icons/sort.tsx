import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { StyleSheet } from 'react-native';

function SvgComponent() {
  return (
    <Svg width={30} height={30} fill="none" viewBox="0 0 25 25" style={styles.icon}>
      <Path
        fill="#17171B"
        d="M6.589 7.367l-.276-.285v10.836l.276-.285a.955.955 0 111.352 1.352l-1.904 1.904a.952.952 0 01-.315.2.895.895 0 01-.723 0 .952.952 0 01-.315-.2L2.78 18.985a.956.956 0 011.352-1.352l.276.285V7.082l-.276.285A.956.956 0 012.78 6.015l1.904-1.904A.952.952 0 015 3.91a.895.895 0 01.723 0 .952.952 0 01.315.2L7.94 6.015a.956.956 0 11-1.352 1.352zm6.437 9.942h8.522a.952.952 0 010 1.904h-8.522a.952.952 0 110-1.904zm0-6h6.522a.952.952 0 010 1.904h-6.522a.952.952 0 010-1.904zm0-6h4.522a.952.952 0 010 1.904h-4.522a.952.952 0 010-1.904z"
      />
    </Svg>
  )
}


const styles = StyleSheet.create({ 
    icon: {
      paddingHorizontal: 22,
      
    }
  })
  

export default SvgComponent