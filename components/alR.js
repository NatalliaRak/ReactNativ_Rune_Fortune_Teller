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

const AlR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/al.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Альгіз</Text>   
                <Text style={styles.runeTells}> Пятнаццатая руна германскага Старэйшага (першага) футарка. адпаведнасць англійскай Z/X/-R. Назва руны азначае «лось». Найстаражытнейшае значэнне — «абарона», таму што лось лічыўся магутным абярэгам. Руна, як лічылася, можа ствараць энергетычныя каналы вакол сябе</Text>
                <Text style={styles.runeName}>ᛉ</Text>
                <Text style={styles.runeTells}> Гэтая руна ў прамым палажэнні. Яна паказвае на абарону, клопат, абуджэнне, мужнасць, абарону, інстынкты</Text>
        </View>
    )
};

export default AlR;