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
        color: 'white',
        padding: '5%'
        
    },
    runeTells: {
       fontSize: 20,
       alignItems: 'center',
       justifyContent: 'center',
       color: 'white'

    },

  });

const DR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/d.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Да́газ</Text>   
                <Text style={styles.runeTells}> Дваццаць трэцяя руна германскага алфавіта. Назва руны азначае «дзень». Вызначае абуджэнне, асвета, рух да незалежнасці</Text>
                <Text style={styles.runeName}>ᛞ</Text>
                <Text style={styles.runeTells}> Гэтая руна не мае адваротнага палажэння. Руна заўсёды гаворыць пра сілу зменаў, гатоўнасць асобы да матэрыяльных ці духоўных зменаў</Text>
        </View>
    )
};

export default DR;