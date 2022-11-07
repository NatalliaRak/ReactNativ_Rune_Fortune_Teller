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

const NR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/n.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>На́ўтыз</Text>   
                <Text style={styles.runeTells}>      
                Дзeсятая руна старшаго футарка. Даслоўны пераклад - "патрэба". Вызначае неабходнасць, трэнне, іннавацыя, жыццёвы ўрок, тэрміновасць
                </Text>
                <Text style={styles.runeName}>ᚾ</Text>
                <Text style={styles.runeTells}> Руна ў прамым палажэнні. Руна гаворыць, што прыйшрў час трываць. З'явіліся патрэбы, абмежаванні, рознагалоссі, супраціў, выжыванне, неабходнасць, недахопы
                </Text>
        </View>
    )
};

export default NR;