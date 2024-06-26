import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Screen2 ({navigation}) {
  return (
    <ScrollView style={styles.scrollView}> 
    <View style=
    {styles.container}>
      <Text style={styles.settings}>Settings</Text>
      <View style={{alignItems:'flex-start'}}>
      <Pressable style={styles.button}><Text style={styles.text}>Language</Text></Pressable>
      <Pressable style={styles.button}><Text style={styles.text}>My Profile</Text></Pressable>
      <Pressable style={styles.button}><Text style={styles.text}>Contact Us</Text></Pressable>
      <Pressable style={styles.button}><Text style={styles.text}>Change password</Text></Pressable>
      <Pressable style={styles.button}><Text style={styles.text}>Privacy Policy</Text></Pressable>
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
   alignItems:'center'
  },
  settings:{
    fontWeight: 'bold',
    fontSize: 25,
    top:20
    
  },
  button: {
    marginBottom:-10,
    justifyContent: 'center',
    padding:20,
    borderRadius: 15,
    elevation: 3,
    top: 60,
    width:370,
    left: -5,
    marginVertical: 20,
    borderBottomWidth: 1,
    borderColor:'grey'
  },
  text:{
    fontSize:20,
    top: 10
  }
});
