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

const AeR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/ae.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>А́нсуз</Text>   
                <Text style={styles.runeTells}> Чацвёртая руна футарка. Даслоўнае значэнне «Бог». Вызначае камунікацыю, веды, паведамленне. </Text>
                <Text style={styles.runeName}>ᚨ</Text>
                <Text style={styles.runeTells}> Гэтая руна ў прамым палажэнні. Яна гаворыць пра добрую параду, праўду, натхненне, энтузіязм</Text>
        </View>
    )
};

export default AeR;