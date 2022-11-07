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

const LR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/l.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Ла́гуз</Text>   
                <Text style={styles.runeTells}>      
                Дваццаць першая руна германскага алфавіта. Назва руны азначае «вада, возера». Вызначае падсвядомасць, калектыўная памяць, яднанне, ментальная моц, мары, уяўленні
                </Text>
                <Text style={styles.runeName}>ᛚ</Text>
                <Text style={styles.runeTells}> Руна ў прамым палажэнні. Яна гаворыць пра інтуіцыю, планы, мары, таямніцы, праніклівасць, інстынкт, веды
                </Text>
        </View>
    )
};

export default LR;