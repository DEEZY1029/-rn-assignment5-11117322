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
      <Pressable style={styles.button}><Text style={styles.text}>Language</Text><Ionicons name="chevron-forward-outline" size={25} color="grey" left={300}/></Pressable>
      <Pressable style={styles.button}><Text style={styles.text}>My Profile</Text><Ionicons name="chevron-forward-outline" size={25} color="grey" left={300}/></Pressable>
      <Pressable style={styles.button}><Text style={styles.text}>Contact Us</Text><Ionicons name="chevron-forward-outline" size={25} color="grey" left={300}/>
      </Pressable>
      <Pressable style={styles.button}><Text style={styles.text}>Change password</Text><Ionicons name="chevron-forward-outline" size={25} color="grey" left={300}/></Pressable>
      <Pressable style={styles.button}><Text style={styles.text}>Privacy Policy</Text><Ionicons name="chevron-forward-outline" size={25} color="grey" left={300} /></Pressable>
      </View>
      <StatusBar style="auto" />
     <Text style={{fontSize: 25, top:120, right:140}}> Theme </Text>
     <Pressable><Ionicons name="toggle" size={55} color="grey" top={80} left={140} /></Pressable>
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
   alignItems:'center',
   top: 40
  },
  settings:{
    fontWeight: 'bold',
    fontSize: 25,
    top:20
    
  },
  button: {
    marginBottom:-40,
    justifyContent: 'center',
    padding:20,
    borderRadius: 15,
    elevation: 3,
    top: 40,
    width:370,
    left: -5,
    marginVertical: 20,
    borderBottomWidth: 1,
    borderColor:'grey'
  },
  text:{
    fontSize:20,
    top: 30
  },

});
