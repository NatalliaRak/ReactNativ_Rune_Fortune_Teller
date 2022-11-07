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

const Pure = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/pure.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Руна Одзіна</Text>   
                <Text style={styles.runeTells}>Дваццаць пятая руна, руна Одзіна </Text>
                <Text style={styles.runeName}></Text>
                <Text style={styles.runeTells}> Гэтая руна пустая. Яна вызначае "чысты лёс"</Text>
        </View>
    )
};

export default Pure;