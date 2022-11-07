import React, { Component } from "react";
import { Text, Button, SafeAreaView, ScrollView, Pressable, StyleSheet, Vibration } from 'react-native';
import AeR from "./aeR";
import AlR from './alR';
import BR from "./BR";
import DR from './DR';
import EiR from "./EiR";
import EoR from "./EoR";
import FR from './FR';
import HagR from "./HagR";
import HR from './HR';
import IR from './IR';
import IngR from "./IngR";
import KaunaR from "./KaunaR";
import LR from './LR';
import MR from './MR';
import OdR from './OdR';
import PaR from './PaR';
import PR from './PR';
import RR from './RR';
import SolR from './SolR';
import NR from './NR';
import ThR from "./ThR";
import TR from './TR';
import UR from "./UR";
import AeR_R from "./AeR_R";
import AlR_R from "./AlR_R";
import BR_R from "./BR_R";
import EiR_R from './EiR_R';
import FR_R from './FR_R';
import Kauna_R from "./Kauna_R";
import L_R from './L_R';
import MR_R from './MR_R';
import NR_R from './NR_R';
import OdR_R from './ OdR_R';
import PaR_R from "./PaR_R";
import RR_R from './RR_R';
import TH_R from './TH_R';
import TR_R from './TR_R';
import UR_R from './UR_R';
import PR_R from './PR_R';
import Pure from './PureR';
import Text_Rune from './about';



const PATTERN = [10, 100, 1500];
class Random extends Component{

    constructor(){
        super();
        this.state = {
            answer: '',
            textValue: 'Атрымаць руну на дзень'
        };
        this.onPressButton= this.onPressButton.bind(this);

    }

    list = [<AeR/>, 
            <AlR/>, 
            <BR/>,
            <DR/>,
            <EiR/>,
            <EoR/>,
            <FR/>,
            <HagR/>,
            <HR/>,
            <IR/>,
            <IngR/>,
            <KaunaR/>,
            <LR/>,
            <MR/>,
            <OdR/>,
            <PaR/>,
            <PR/>,
            <RR/>,
            <SolR/>,
            <NR/>,
            <ThR/>,
            <TR/>,
            <UR/>,
            <AeR_R/>,
            <AlR_R/>,
            <BR_R/>,
            <EiR_R/>,
            <FR_R/>,
            <Kauna_R/>,
            <L_R/>,
            <MR_R/>,
            <NR_R/>,
            <OdR_R/>,
            <PaR_R/>,
            <PR_R/>,
            <RR_R/>,
            <TH_R/>,
            <TR_R/>,
            <UR_R/>,
            <Pure/>
           ]

 

    onPressButton() {
        this.setState({
            answer: this.list[Math.floor(Math.random() * this.list.length)],
            textValue: 'Задаць пытанне рунам'
        });
        Vibration.vibrate(PATTERN)
      }


      render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>

                    <Text_Rune/>

                    <Pressable style={styles.butt} onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}>
                        <Button title={this.state.textValue}
                        onPress={this.onPressButton}
                        color="white"   
                        
                />     
                    </Pressable>

                     <Text>{this.state.answer}</Text>

                </ScrollView>
            </SafeAreaView>
        )
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      

    },
   butt: {
    backgroundColor: '#AB2F53',
    borderRadius: 15,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: '10%'

   }
  });

export default Random