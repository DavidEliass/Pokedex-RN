import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { color } from 'react-native-reanimated'

import Pokeball from '../../../assets/patterns/pokeball_patterns'

import styles from './styles'

import Pokemon1 from '../../../assets/generations/generation1/001.png'
import Pokemon2 from '../../../assets/generations/generation2/155.png'
import Pokemon3 from '../../../assets/generations/generation3/258.png'
import Pokemon4 from '../../../assets/generations/generation4/387.png'
import Pokemon5 from '../../../assets/generations/generation5/498.png'
import Pokemon6 from '../../../assets/generations/generation6/656.png'
import Pokemon7 from '../../../assets/generations/generation7/722.png'
import Pokemon8 from '../../../assets/generations/generation8/813.png'

const GenerationModal = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Generations</Text>
            <Text style={styles.SubTitle}>Use search for generations to explore your Pokémon!</Text>
            <View style={styles.grid}>

                <View style={styles.card}>
                    <Image source={Pokemon1} style={styles.image}/>
                    <Text style={styles.Label}>Generation I</Text>
                </View>

                <View style={[styles.card, styles.cardSelect]}>
                    <Pokeball style={[styles.patterns, styles.pokeballPatterns]} />
                    <Image source={Pokemon2} style={styles.image}/>
                    <Text style={[styles.Label, styles.LabelSelect]}>Generation II</Text>
                </View>

                <View style={styles.card}>
                    <Image source={Pokemon3} style={styles.image} />
                    <Text style={styles.Label}>Generation III</Text>
                </View>

                <View style={styles.card}>
                    <Image source={Pokemon4} style={styles.image} />
                    <Text style={styles.Label}>Generation IV</Text>
                </View>

                <View style={styles.card}>
                    <Image source={Pokemon5} style={styles.image} />
                    <Text style={styles.Label}>Generation V</Text>
                </View>
                <View style={styles.card}>
                    <Image source={Pokemon6} style={styles.image} />
                    <Text style={styles.Label}>Generation VI</Text>
                </View>
                <View style={styles.card}>
                    <Image source={Pokemon7} style={styles.image} />
                    <Text style={styles.Label}>Generation VII</Text>
                </View>
                <View style={styles.card}>
                    <Image source={Pokemon8} style={styles.image} />
                    <Text style={styles.Label}>Generation VII</Text>
                </View>

            </View>


        </View>
    )
}






export default GenerationModal 