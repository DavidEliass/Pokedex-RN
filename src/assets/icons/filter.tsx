import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { StyleSheet } from 'react-native';


function SvgComponent() {
  return (
    <Svg width={30} height={30} fill="none" viewBox="0 0 25 25" style={styles.icon}>
      <Path
        fill="#17171B"
        d="M11.334 7.486a3.001 3.001 0 01-5.668 0A.915.915 0 015.5 7.5h-2a1 1 0 010-2h2c.057 0 .112.005.166.014a3.001 3.001 0 015.668 0A.915.915 0 0111.5 5.5h10a1 1 0 110 2h-10c-.056 0-.112-.005-.166-.014zM9.5 6.5a1 1 0 11-2 0 1 1 0 012 0zm-7 12a1 1 0 011-1h2c.057 0 .112.005.166.014a3.001 3.001 0 015.668 0 .915.915 0 01.166-.014h10a1 1 0 110 2h-10c-.056 0-.112-.005-.166-.014a3.001 3.001 0 01-5.668 0 .915.915 0 01-.166.014h-2a1 1 0 01-1-1zm7 0a1 1 0 11-2 0 1 1 0 012 0zm12-7a1 1 0 110 2h-2c-.056 0-.112-.005-.166-.014a3.001 3.001 0 01-5.668 0 .915.915 0 01-.166.014h-10a1 1 0 110-2h10c.056 0 .112.005.166.014a3.001 3.001 0 015.668 0 .915.915 0 01.166-.014h2zm-5 2a1 1 0 100-2 1 1 0 000 2z"
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