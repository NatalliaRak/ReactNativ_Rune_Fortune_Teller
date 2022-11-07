import React from "react";
import { Image, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        
        
    },
    aeImg: {
      height: 200,
      width: 200,
      shadowColor: '#2C3036',
      shadowOffset: {width: -5, height: 7},
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    runeName: {
        textAlign: 'center',
        marginBottom: '5%',
        fontSize: 30,
        marginTop: '5%',
        color: 'white'
        
    },
    runeTells: {
       fontSize: 20,
       alignItems: 'center',
       justifyContent: 'center',
       color: 'white',
       padding: '5%'

    },

  });

const EiR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/e.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Эваз</Text>   
                <Text style={styles.runeTells}> Дзевятнаццатая руна старэйшага і англасаксонскага футаркаў.  Назва руны вызначае "конь". Ёсць меркаванне, што гэтая назва паходзіць на падабенства верхняй часткі руны на выгляд каня збоку. Вызначае давер, супольную працу, любоў, партнёрства, жывёлаў, эмоцыі</Text>
                <Text style={styles.runeName}>ᛖ</Text>
                <Text style={styles.runeTells}> Гэтая руна заўсёды ў прамым палажэнні. Яна паказвае рух наперад і змены да лепшага з паступовым, але няўхільным прагрэсам. Гэта таксама можа паказаць працу ў камандзе, давер і лаяльнасць</Text>
        </View>
    )
};

export default EiR;