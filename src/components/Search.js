import * as React from 'react'
import { Searchbar, shadow } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
    <View style={styles.container}>
        <Searchbar
            placeholder="What Pokémon are you looking for?"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.search}
            inputStyle={styles.TextInput}
            
            />
    </View>
    );
};

const styles = StyleSheet.create({

    container: {
        paddingTop: 20,
        color: 'red',
        textAlign: "center",
    },
    

    

    search: {
        width: 320,
        height: 60,
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        
        textAlign: "center",
        
    }
})

export default SearchComponent