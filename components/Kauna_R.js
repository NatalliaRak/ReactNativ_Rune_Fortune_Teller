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

const KaunaR_R = () => {
    

    return(
        <View style={styles.container}>
            <Image
                source={
                    require('../assets/kauna_R.png')
                }
                style={styles.aeImg}
            />
                <Text style={styles.runeName}>Ке́наз, Kaўна</Text>   
                <Text style={styles.runeTells}>      
                Шосты знак старажытнагерманскага, англасаксонскага і скандынаўскіх рунічных алфавітаў. Верагодна, узыходзіць да лацінскага знака C. Вызначае веды, рамяство, хатняе вогнішча, традыцыя, досвед
                </Text>
                <Text style={styles.runeName}>ᚲ</Text>
                <Text style={styles.runeTells}> Руна ў адваротным палажэнні. Руна гаворыць пра адсутнасць бачання, ілжывыя надзеі і нестабільнасць.
                </Text>
        </View>
    )
};

export default KaunaR_R;