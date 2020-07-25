import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { StyleSheet, View } from 'react-native'

function SvgComponent() {
  return (
  <View>
    <Svg width={20} height={20} fill="none" viewBox="0 0 25 25" style={styles.search}> 
      <Path
        fill="#FFFFFF"
        d="M4.65 21.808a9.122 9.122 0 01-.265-.256c-4.597-4.597-4.597-12.05 0-16.647C8.982.308 23.63 0 23.63 0s2 16.955-2.598 21.552c-4.082 4.083-10.418 4.54-15.005 1.37l3.696-4.535 5.908-1.276-4.823-.482 3.065-3.12 3.49-.765-2.76-.817 2.76-4.977-3.925 4.402-1.515-2.139.533 3.531-2.733 3.081-1.267-3.898v5.184l-3.807 4.697z"
      />
    </Svg>
  </View>
  )
}


const styles = StyleSheet.create({

  

  

  search: {
    paddingLeft: 35
      
  }
})


export default SvgComponent
