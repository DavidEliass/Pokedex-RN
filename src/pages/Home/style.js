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
    }
})


