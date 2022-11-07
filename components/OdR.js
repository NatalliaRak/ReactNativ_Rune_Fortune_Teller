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

const OdR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/oe.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Одал (Отал, Оціла)</Text>   
                <Text style={styles.runeTells}>      
                Дваццаць чацьвёртая руна старажытнагерманскага, 23-я руна англасаксонскага і скандынаўскага руніцкага алфавітаў. Меркавана, да гэтай руны можа ўзыходзіць гоцкі знак othal (𐍉), аднак не выключаецца яго грэчаскае паходжанне. Сама руна, напэўна, узыходзіць або да паўночна-этрускай формы літары o, або да грэчаскай амегі. Азначае спадкаемнасць, маёмасць, спадчына, мір, рай на зямлі
                </Text>
                <Text style={styles.runeName}>ᛟ</Text>
                <Text style={styles.runeTells}> Руна ў прамым палажэнні. Руна гаворыць пра духоўную спадчыну, фундаментальныя каштоўнасці, багацце
                </Text>
        </View>
    )
};

export default OdR;