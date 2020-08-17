import * as React from 'react'
import { View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { Bug, Dark, Dragon,Electric, Fairy, Fighting, Fire, Flying, Ghost, Grass, Ground, Ice, Normal, Poison, Psychic, Rock, Steel, Water, Heavy } from '../../config/import-types'
import { Short, Medium, Tall, HeavyIcon, NormalIcon,LightIcon } from '../../config/import-height'

const Filter = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Filters</Text>
            <Text style={styles.SubTitle}>Use advanced search to explore Pokémon by type, weakness, height and more!</Text>

            <Text style={styles.TextLabel}>Types</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer} >
                <Bug  style={[styles.icone, styles.iconSelect]}/>
                <Dark style={styles.icone}/>
                <Dragon style={styles.icone} />
                <Electric style={styles.icone}/>
                <Fairy style={styles.icone}/>
                <Fighting style={styles.icone}/>
                <Fire style={styles.icone}/>
                <Flying style={styles.icone}/>
                <Ghost style={styles.icone}/>
                <Grass style={styles.icone}/>
                <Ground style={styles.icone}/>
                <Ice style={styles.icone}/>
                <Normal style={styles.icone}/>
                <Poison style={styles.icone}/>
                <Psychic style={styles.icone}/>
                <Rock style={styles.icone}/>
                <Steel style={styles.icone}/>
                <Water style={styles.icone}/>
                
            </ScrollView>
            
            
            <Text style={styles.TextLabel}>Weaknesses</Text>
            <ScrollView horizontal={true} style={styles.Scroll} >
                <Bug  style={styles.icone} />
                <Dark style={styles.icone} />
                <Dragon style={styles.icone} />
                <Electric style={styles.icone}/>
                <Fairy style={styles.icone}/>
                <Fighting style={styles.icone}/>
                <Fire style={styles.icone}/>
                <Flying style={styles.icone}/>
                <Ghost style={styles.icone}/>
                <Grass style={styles.icone}/>
                <Ground style={styles.icone}/>
                <Ice style={styles.icone}/>
                <Normal style={styles.icone}/>
                <Poison style={styles.icone}/>
                <Psychic style={styles.icone}/>
                <Rock style={styles.icone}/>
                <Steel style={styles.icone}/>
                <Water style={styles.icone}/>
                
            </ScrollView>
            
            <Text style={styles.TextLabel}>Heights</Text>
            <ScrollView horizontal={true} style={styles.Scroll} contentContainerStyle={styles.contentContainer}>
                <Short style={styles.icone}/>
                <Medium style={styles.icone}/>
                <Tall style={styles.icone}/>
            </ScrollView>

            <Text style={styles.TextLabel}>Weights</Text>
            <ScrollView horizontal={true} style={styles.Scroll} contentContainerStyle={styles.contentContainer}>
                <LightIcon style={styles.icone}/>
                <NormalIcon style={styles.icone}/>
                <HeavyIcon style={styles.icone}/>
            </ScrollView>
            
            <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.delected_button}>
            <Text style={styles.actiondelectedText}> Reset </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.selected_button}>
            <Text style={styles.actionText}> Apply </Text>
          </TouchableOpacity>
            </View>
        </View>
    )
};

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
        fontFamily: 'sf-pro-display-regular',
    },

    selected_button: {
        backgroundColor: '#EA5D60',
        borderRadius: 5,
        width: 160,
        height: 60,
        marginTop: 20,
        alignContent: "center",
        justifyContent: "center",
        elevation: 3,
        
    },

    actionText: {
        color: '#FFF',
        fontSize: 16,
       textAlign: "center",
       fontFamily: 'sf-pro-display-regular',
    },

    actiondelectedText: {
        color: '#747476',
        fontSize: 16,
        textAlign: "center",
        color: '#747476',
        fontFamily: 'sf-pro-display-regular',
        lineHeight: 19,
    },

    delected_button: {
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        width: 160,
        height: 60,
        marginTop: 20,
        alignContent: "center",
        justifyContent: "center",
        marginRight: 5
    },

    TextLabel: {
        fontFamily: 'sf-pro-display-bold',
        fontSize: 16,
        marginTop: 35,
        
    },

    icone: {
        marginLeft : 10
    },

    contentContainer: {
        marginTop: 15
    },

    iconSelect: {
        backgroundColor: '#F2F2F2',
        borderRadius: 50,
        height: 80,
        width: 80
    },

    ButtonContainer: {
        flex: 1,
        flexDirection: 'row',
    }

    


    
})


export default Filter 