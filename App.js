import { StyleSheet, View, ImageBackground } from 'react-native';
import Random from './components/random';



export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={
        require('./assets/pattern.png')
      } resizeMode="cover"
        style={styles.bkg}>
          <Random />
      </ImageBackground>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     },
  bkg: {
    flex: 1,
    textAlign: 'center',
    padding: '3%'
  }

});
