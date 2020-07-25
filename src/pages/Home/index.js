import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from "react-native-svg"


// Import SVG
import Pokeball from '../../assets/patterns/pokeball'
import Generation from '../../assets/icons/generation'
import Sort from '../../assets/icons/sort'
import Filter from '../../assets/icons/filter'

// Import Style
import styles from './style';

//Import Component

import Search from '../../components/Search'





export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
  <View style={styles.Container}>
     <Pokeball width="75" height="75" style={styles.patterns} />
    <View style={styles.TabIcon}>
      <TouchableOpacity><Generation/></TouchableOpacity>
      <TouchableOpacity><Sort /></TouchableOpacity>
      <TouchableOpacity><Filter /></TouchableOpacity>
      
      
    </View>
    <View>
      <Text style={styles.Title}>Pokédex</Text>
      <Text style={styles.SubTitle}>Search for Pokémon by name or using the National Pokédex number.</Text> 
      <Search />
    </View>

    <View>
      
    </View>

  </View> 
    

    );
}

