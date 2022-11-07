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

const UR_R = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/u_R.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>У́руз</Text>   
                <Text style={styles.runeTells}>      
                Другая руна германскага алфавіта. Назва руны паходзіць ад слова «зубр». Вызначае фізічную моц, незалежнасць, выжыванне і жыццёвыя сілы
                </Text>
                <Text style={styles.runeName}>ᚢ</Text>
                <Text style={styles.runeTells}>Руна ў адваротным палажэнні. Руна гаворыць пра страту здароўя, дамінаванне іншых, няправільна накіраваныя сілы
                </Text>
        </View>
    )
};

export default UR_R;