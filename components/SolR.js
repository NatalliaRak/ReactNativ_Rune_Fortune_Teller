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

const SolR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/sol.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Совіла</Text>   
                <Text style={styles.runeTells}>      
                Шаснаццатая руна германскага алфавіта (футарка). Назва руны паходзіць ад слова «сонца». Вызначае перамогу, майстэрства, багацце
                </Text>
                <Text style={styles.runeName}>ᛊ ці ᛋ</Text>
                <Text style={styles.runeTells}>Руна не мае адваротнага палажэння. Руна гаворыць пра прагрэс, рух, эвалюцыю, перспектыву, падарожжа
                </Text>
        </View>
    )
};

export default SolR;