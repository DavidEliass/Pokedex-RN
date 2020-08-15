import { StyleSheet } from 'react-native';
import styled from 'styled-components'

const styles = StyleSheet.create({
    Container: {
        paddingLeft: 20,
        paddingTop: 10,
        // backgroundColor: '#E5E5E5',
        borderRadius: 15
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


    grid: {
        marginTop: 10,
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: -20
    },

    card: {
        height: 129,
        width: 160,
        backgroundColor: '#E5E5E5',
        margin: 10,
        borderRadius: 10,
        
    },


    TextLabel: {
        fontFamily: 'sf-pro-display-bold',
        fontSize: 16,
        marginTop: 35
    },

    Label: {
        color: '#747476',
        fontFamily: 'sf-pro-display-bold',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10

    },

    patterns: {
       
    },

    image: {
        alignSelf: 'center',
        marginTop: 10
    },

    cardSelect: {
        backgroundColor: '#EA5D60',
        
    },

    LabelSelect: {
        color: '#fff',
    },

    pokeballPatterns: {
        backgroundColor: '#fff',
        width: 90,
        height: 50 ,
        position: "relative",
        top: '',
        color: '#fff',
    }
    
})

export default styles;