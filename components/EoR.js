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

const EoR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/eo.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Эйваз</Text>   
                <Text style={styles.runeTells}> Трынаццатая руна германскага алфавіту. Назва руны азначае абарону і ціс (ням.: Eibe). Вызначае ініцыяцыю, смяротныя таямніцы, пазачассе, вечнасць, бесмяротнасць</Text>
                <Text style={styles.runeName}>ᛇ</Text>
                <Text style={styles.runeTells}> Гэтая руна ў прамым палажэння. Яна азначае адміранне чагосьці старога і адраджэнне новай рэчаіснасці. Янв таксама можа азначаць надзейнасць, прасвятленне і пачуццё мэты, сімвалізуе сувязі паміж мветам памерлых і жывых</Text>
        </View>
    )
};

export default EoR;