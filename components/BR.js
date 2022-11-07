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

const BR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/b.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Беркана</Text>   
                <Text style={styles.runeTells}> Васямнаццатая руна старэйшага і англасаксонскага футаркаў, чатырнаццатая руна малодшага футарка. Назва руны адсылае да прагерманскай мовы - "бяроза". Вызначае адраджэнне, спеласць, аднаўленне, бяспеку, жыццё расліны</Text>
                <Text style={styles.runeName}>ᛒ</Text>
                <Text style={styles.runeTells}> Гэтая руна ў прамым палажэнні. Яна паказвае на разумовы і фізічны рост, а таксама на аднаўленчую сілу і вызваленне духу</Text>
        </View>
    )
};

export default BR;