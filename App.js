import React from 'react';
import Routes from './src/config/router'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'



export default props => {
  let [fontsLoaded] = useFonts({
    'sf-pro-display-bold' : require('./src/assets/fonts/sf-pro-display-bold.ttf'),
    'sf-pro-display-medium': require('./src/assets/fonts/sf-pro-display-medium.ttf'),
    'sf-pro-display-regular': require('./src/assets/fonts/sf-pro-display-regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (

      <Routes />
    )
  }



  
}

