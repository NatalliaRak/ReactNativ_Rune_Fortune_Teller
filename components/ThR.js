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

const ThR = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/th.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Ту́рысаз</Text>   
                <Text style={styles.runeTells}>      
                У ісландскім алфавіце яна захавалася да гэтага часу ў выглядзе літары þ («Торн») і адпавядае англійскай th. Пазначае «турс» — волат. Прыхаваны канфлік, ваяўнічая энэргія.
                </Text>
                <Text style={styles.runeName}>ᚦ</Text>
                <Text style={styles.runeTells}>Руна ў прамым палажэнні. Руна гаворыць пра абарону, выклік, небяспеку, атаку, сілу
                </Text>
        </View>
    )
};

export default ThR;