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

const TR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/t.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Тэйваз</Text>   
                <Text style={styles.runeTells}>      
                Cямнаццатая руна старэйшага і англасаксонскага футаркаў, дванаццатая руна малодшага футарка. Вызначае законы, справядлівасць, ахвяру, прынцыпы, духоўнага ваяра
                </Text>
                <Text style={styles.runeName}>ᛏ</Text>
                <Text style={styles.runeTells}> Руна ў прамым палажэнні. Руна гаворыць пра лідарскія здольнасці, аўтарытэт і рацыю
                </Text>
        </View>
    )
};

export default TR;