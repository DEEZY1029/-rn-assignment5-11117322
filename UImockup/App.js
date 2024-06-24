import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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
      <View style={styles.searchbuttoncontainer}>
      <Pressable style={styles.searchbutton}><Ionicons name="search-outline" size={30} color="black" /></Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/newcreditcard.png')} style={{width:370, height:230, borderRadius:20}}/>
        </View>
        <View style={styles.row}>
      <Pressable style={styles.upity}><Ionicons name="arrow-up-outline" size={30} color="black" /></Pressable>
      <Pressable style={styles.upity}><Ionicons name="arrow-down-outline" size={30} color="black" /></Pressable>
      <Pressable style={styles.upity}><Ionicons name="cloud-upload-outline" size={30} color="black" /></Pressable>
      <Pressable style={styles.upity}><Ionicons name="cash-outline" size={30} color="black" /></Pressable>
      </View>
      <View style={styles.btt}>
      <Text style={styles.bts}> send </Text>
      <Text style={styles.bts}> Receive</Text>
      <Text style={styles.bts}> Loan </Text>
      <Text style={styles.bts}> Top-up</Text>
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
    marginBottom:5,
  },
  imageContainer:{
    top:100,
    justifyContent:'center',
    left: 10,
    borderRadius: 20,
    marginBottom: 20
  },
  profpic:{
    justifyContent:'center',
    left: 5,
    borderRadius: 20,
    marginVertical:30,
    marginTop:-30,
    top:190,
  },
  upity:{
    backgroundColor:'#F2F2F3',
    width: 60,
    height:60,
    borderRadius: 28,
    justifyContent:'center',
    alignItems:'center',
    top:100,
    marginHorizontal: 20
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    right:1
    
  },
  searchbutton:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F2F2F3',  
    borderRadius: 30,
    height: 50,
    width: 50
  },
  searchbuttoncontainer:{
    alignItems:'flex-end',
    top:35,
    right: 20
  },
btt:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  top:100,
  alignItems:'center',
  flex: 1,
  marginTop:5
},
bts:{
fontSize:16,
marginHorizontal:20,
right:1
}
});
