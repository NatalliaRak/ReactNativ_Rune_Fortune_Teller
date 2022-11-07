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

const RR_R = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/r_R.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Ра́йда</Text>   
                <Text style={styles.runeTells}>      
                Пятая руна германскага алфавіта. Назва руны азначае «язда». Знак шляха, вандроўнік, шляхетнасці, унутранага компаса
                </Text>
                <Text style={styles.runeName}>ᚱ</Text>
                <Text style={styles.runeTells}>Руна ў адваротным палажэнні. Руна гаворыць пра жорсткасць, несправядлівасць, закасцянеласць, зрыў дамоваў
                </Text>
        </View>
    )
};

export default RR_R;