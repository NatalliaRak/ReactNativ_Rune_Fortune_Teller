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

const PaR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/pa.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Перт</Text>   
                <Text style={styles.runeTells}>      
                Руна, якая азначае гук «п» у старэйшым футарку, не сустракаецца ў малодшым футарку. У Англа-саксонскай рунічнай паэме называецца peorð. Вызначае норнаў, шанец, магчымасць, лёс, непазнаваймае, гульню
                </Text>
                <Text style={styles.runeName}>ᛈ</Text>
                <Text style={styles.runeTells}>Руна ў прамым палажэнні. Руна гаворыць пра лёс, таямніцу, акультызм, жаночую пладавітасць, таямніцы, схаваныя сэнсы, шанец, удачу, містыку, невядомасць
                </Text>
        </View>
    )
};

export default PaR;