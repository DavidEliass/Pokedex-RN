
import Svg, { Path } from "react-native-svg"
import { StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import styled from 'styled-components/native';


function SvgComponent() {
 
 
  return (


    <Svg width={30} height={30} fill="none" viewBox="0 0 25 25" style={styles.icon}>
      <Path
        fill="#17171B"
        d="M22.5 4.643a2.143 2.143 0 11-4.286 0 2.143 2.143 0 014.286 0zM4.643 8.214a2.143 2.143 0 100-4.285 2.143 2.143 0 000 4.285zm7.143 0a2.143 2.143 0 100-4.285 2.143 2.143 0 000 4.285zm-7.143 7.143a2.143 2.143 0 100-4.285 2.143 2.143 0 000 4.285zm9.286-2.143a2.143 2.143 0 11-4.286 0 2.143 2.143 0 014.286 0zm5 2.143a2.143 2.143 0 100-4.285 2.143 2.143 0 000 4.285zm-12.143 5a2.143 2.143 0 11-4.286 0 2.143 2.143 0 014.286 0zm5 2.143a2.143 2.143 0 100-4.286 2.143 2.143 0 000 4.286zm9.285-2.143a2.143 2.143 0 11-4.285 0 2.143 2.143 0 014.285 0z"
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
  