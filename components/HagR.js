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

const HagR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/h.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Ха́галаз</Text>   
                <Text style={styles.runeTells}> Дзявятая руна германскага алфавіта. Назва руны азначае град, «гібель», разбурэнне. Вызначае катастрофу, крызу, кардынальныя змены, прыняццё, капітуляцыя, магчымасці</Text>
                <Text style={styles.runeName}>ᚺ</Text>
                <Text style={styles.runeTells}> Гэтая руна не мае адваротнага палажэння. Хагалаз уяўляе сабой непазбежныя змены, але гэта не абавязкова дрэнна - некаторыя штормы прыходзяць, каб расчысціць наш шлях. Урок гэтай руны - вучыцца на нашых цяжкасцях і расці праз нашы памылкі</Text>
        </View>
    )
};

export default HagR;