import React,{useRef} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from "react-native-svg"
import { Modalize } from 'react-native-modalize'


// Import SVG
import Pokeball from '../../assets/patterns/pokeball'
import Pokeball_patterns from '../../assets/patterns/pokeball_patterns'
import Generation from '../../assets/icons/generation'
import Sort from '../../assets/icons/sort'
import Filter from '../../assets/icons/filter'

//Type 
import Glass_Type from '../../assets/types/glass'
import Poison_Type from '../../assets/types/poison'

//Pokemon Png
import Bulbasaur from '../../assets/generations/generation1/001.png'

// Import Style
import styles from './style';

//Import Component
import Search from '../../components/Search'
import SortModal from '../../components/Modal/Sort'





export default function Home() {

  //Variaveis da Search
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);


  //Variaveis do Modal

  const modalizeRef = useRef(null);

  const onOpen_Sort = () => {
    modalizeRef.current?.open();
  }


  return (
    <View style={styles.Container}>
      <Pokeball width="75" height="75" style={styles.patterns} />
      <View style={styles.TabIcon}>
        <TouchableOpacity><Generation /></TouchableOpacity>
        <TouchableOpacity onPress={onOpen_Sort}><Sort /></TouchableOpacity>
        <TouchableOpacity><Filter /></TouchableOpacity>

       

      </View>
      <Modalize ref={modalizeRef} snapPoint={337} modalHeight={500}>
          <SortModal />
          </Modalize>

      <View>
        <Text style={styles.Title}>Pokédex</Text>
        <Text style={styles.SubTitle}>Search for Pokémon by name or using the National Pokédex number.</Text>
        <Search />
      </View>

      <View style={styles.CardList}>
        <View style={styles.Cards}>
          <Pokeball_patterns />
          <Image source={Bulbasaur} style={styles.pokemonImg}/>
          <Text style={styles.number}>#001</Text>
          <Text style={styles.pokemonName}>Bulbasaur</Text>
          <View style={styles.typeGroup}>
            <View style={styles.typeTag}>
            <Glass_Type  style={styles.badgtes}/><Text style={styles.typeText}>Grass</Text>
            </View>

            <View style={styles.typeTag2}>
            <Poison_Type  style={styles.badgtes}/><Text style={styles.typeText}>Poison</Text>
            </View>
            

            
          </View>
        </View>

      
            

            

      </View>
      
      
    </View>


  );
}

