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

const FR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/f.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Феху або Феу</Text>   
                <Text style={styles.runeTells}> Першая руна германскага Старэйшага футарка і першая руна першага футарха, прысвечанага богу ўрадлівасці Фрэйра і багіні кахання Фрэй. Назва руны азначае скот як знак дабрабыту, багацця і працвітання</Text>
                <Text style={styles.runeName}>ᚠ</Text>
                <Text style={styles.runeTells}> Гэтая руна ў прамым палажэння. Яна абяцае багацце і фінансавы поспех у бліжэйшы час, магчымы сацыяльны поспех</Text>
        </View>
    )
};

export default FR;