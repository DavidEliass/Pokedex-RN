import * as React from 'react'
import { View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import { color } from 'react-native-reanimated'


const SortModal = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Sort</Text>
            <Text style={styles.SubTitle}>Sort Pokémons alphabetically or by National Pokédex number!</Text>

            <TouchableOpacity style={styles.selected_button}>
            <Text style={styles.actionText}> Smallest number first </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.delected_button}>
            <Text style={styles.actiondelectedText}> Highest number first </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.delected_button}>
            <Text style={styles.actiondelectedText}> A-Z </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.delected_button}>
            <Text style={styles.actiondelectedText}> Z-A </Text>
          </TouchableOpacity>
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
        
    }
    
})


export default SortModal 