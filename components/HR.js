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

const HR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/3.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Феху або Феу</Text>   
                <Text style={styles.runeTells}> Сёмая руна германскага алфавіта. Назва руны азначае «дар». Вызначае абмен, ахвяраванне, святы абмен, шчодрасць, таленты</Text>
                <Text style={styles.runeName}>ᚷ</Text>
                <Text style={styles.runeTells}>Гэтая руна не мае адваротнага палажэння. Гэтая руна - руна дароў. Яна гаворыць пра добрае партнёрства, баланс і шчодрасць. </Text>
        </View>
    )
};

export default HR;