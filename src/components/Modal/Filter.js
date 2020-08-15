import * as React from 'react'
import { View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import { color } from 'react-native-reanimated'


const Filter = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Filters</Text>
            <Text style={styles.SubTitle}>Use advanced search to explore Pokémon by type, weakness, height and more!</Text>

            <Text style={styles.TextLabel}>Types</Text>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        paddingLeft: 30,
        paddingTop: 10
    },
    
    Title: {
        paddingTop: 20,
        color: '#17171B',
        fontSize: 32,
        paddingBottom: 10,
        fontFamily: 'sf-pro-display-bold'
    },

    SubTitle: {
        fontSize: 16,
        color: '#747476',
        fontFamily: 'sf-pro-display-regular'
    },

    selected_button: {
        backgroundColor: '#EA5D60',
        borderRadius: 5,
        width: 300,
        height: 60,
        marginTop: 20,
        alignContent: "center",
        justifyContent: "center"
    },

    actionText: {
        color: '#FFF',
        fontSize: 16,
       textAlign: "center",
       fontFamily: 'sf-pro-display-regular',
    },

    actiondelectedText: {
        color: '#FFF',
        fontSize: 16,
        textAlign: "center",
        color: '#747476',
        fontFamily: 'sf-pro-display-regular',
        lineHeight: 19
    },

    delected_button: {
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        width: 300,
        height: 60,
        marginTop: 20,
        alignContent: "center",
        justifyContent: "center",
    },

    TextLabel: {
        fontFamily: 'sf-pro-display-bold',
        fontSize: 16,
        marginTop: 35 
    }
    
})


export default Filter 