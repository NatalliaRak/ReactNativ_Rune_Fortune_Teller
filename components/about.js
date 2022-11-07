import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

   img: {
    height: 300,
    width: 300,
    shadowColor: '#2C3036',
    shadowOffset: {width: -5, height: 7},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    paddingTop: '15%',


   },
   mainText: {
    textAlign: 'center',
    padding: '5%',
    fontSize: 30,
    color: 'white',
    shadowColor: '#232D3C',
    shadowOffset: {width: -10, height: 15},
    shadowOpacity: 0.2,
    shadowRadius: 7,
   },
   runeDisc: {
    color: 'white',
    fontSize: 20,
    padding: '5%'
   }
  });
const Text_Rune =() =>{
   return(
    <View style={styles.container}>
        <Text style={styles.mainText}>
            Гаданне на рунах
        </Text>
        <Image
                source={
                    require('../assets/bag.png')
                }
                style={styles.img}
            />
        <Text style={styles.runeDisc}>
        Магічныя ўласцівасці рунам прыпісвалі яшчэ старажытныя германцы, так, у «Старэйшай Эдзе» можна знайсці ўпамінанні пра нейкія містычныя ўласцівасці рун як абярэгаў ад розных небяспек, зману, як гаючых сімвалаў.
        </Text>
        <Text style={styles.runeDisc}>
         Сёння руны выкарыстоўваюцца выключна як містычныя сімвалы для варажбы, «зачаравання» прадметаў, выкарыстоўваюцца ў татуіроўках і абярэгах. Для варажбы выкарыстоўваецца набор з 24 рун. Як правіла, руны наносяць на камяні, аднак варажбіты часта карыстаюцца рунамі з дрэва, касці і нават салёнага цеста. 
        </Text> 
    </View>
    )
}

export default Text_Rune;