import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.scrollView}> 
    <View style=
    {styles.container}>
      <View style={styles.profpic}>
      <Image source={require('./assets/profpic.jpg')} style={{width:100, height:70}}/>
      </View>
      <Text style={ styles.welkies}>Welcome Back,</Text>
      <Text style={ styles.name}>Eric Atsu</Text>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/credit card.png')} style={{width:380, height:200, borderRadius:30}}/>
      </View>
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: '#fff',

  },
  container:{
    backgroundColor: '#fff',
    top:-80,
  },
  welkies:{
    alignItems: 'flex-end',
    fontSize: 20,
    top: 100,
    left: 100,
    marginBottom:10,
    color: 'grey'
  },
  name:{
    alignItems: 'flex-start',
    fontSize: 25,
    fontWeight: 'bold',
    top: 100,
    left: 100,
    marginBottom:10,
  },
  imageContainer:{
    top:100,
    justifyContent:'center',
    left: 5,
    borderRadius: 20,
    marginVertical:30,
  },
  profpic:{
    justifyContent:'center',
    left: 5,
    borderRadius: 20,
    marginVertical:30,
    marginTop:-30,
    top:190,
  }
});
