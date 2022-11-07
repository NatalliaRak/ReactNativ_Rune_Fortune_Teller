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

const IR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/i.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>І́са</Text>   
                <Text style={styles.runeTells}> 
                Aдзінаццатая руна германскага алфавіта. Назва руны азначае «лёд». Вызначае застой, нерухомасць, самакантроль, ідэнтычнасць, фокус
                </Text>
                <Text style={styles.runeName}>ᛁ</Text>
                <Text style={styles.runeTells}> Руна гаворыць пра прыпыненне, затрымку, цішыню, расчараванне, унутраныя блокі, паўзу, чаканне
                </Text>
        </View>
    )
};

export default IR;