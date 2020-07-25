import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({ 
    Container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24

    },

    TabIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
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

    Cards: {
        borderRadius: 10,
        width: 325,
        height: 144,
        backgroundColor: '#8BBE8A',
        paddingLeft: 20,
        paddingTop: 20
    },

    CardList: {
        paddingTop: 45,

    },

    number: {
        fontSize: 12,
        fontFamily: 'sf-pro-display-bold',
        color: 'rgba(23, 23, 27, 0.6);'
    },

    pokemonName: {
        fontSize: 26,
        fontFamily: 'sf-pro-display-bold',
        color: '#FFFFFF'
    },

    typeGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 5,
        
    },

    typeTag: {
        backgroundColor: '#62B95790',
        width: 80,
        height: 50,
        alignItems: 'center',
        paddingTop: 3,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: 10
        
    },

    typeTag2: {
        backgroundColor: '#A552CC',
        width: 80,
        height: 50,
        alignItems: 'center',
        paddingTop: 3,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: 10
        
    },

    typeText: {
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: 'sf-pro-display-bold',
        paddingLeft: -10,
    },

    badgtes: {
        
    }


})


