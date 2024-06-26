import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , Image, Pressable , FlatList} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Screen1 ({navigation}) {
  const paw =[
    { index:1,
    application:"Apple Store",
    category:'Entertainment',
    debt:'-$5,99',
    image: require('./assets/apple.png')
    },
    { index:2,
      application:"Spotify",
      category:'Music',
      debt:'-$12,99',
      image: require('./assets/spotify.png')
      },
      { index:3,
        application:"Money Transfer",
        category:'Transaction',
        debt:'$300',
        image: require('./assets/moneyTransfer.png')
        },
        { index:4,
          application:"Grocery",
          category:'Shopping',
          debt:'-$ 88',
          image: require('./assets/grocery (1).png')
          },
          { index:5,
            application:"apple",
            category:'entertainment',
            debt:'-$5,99'
            },
            { index:5,
              application:"apple",
              category:'entertainment',
              debt:'-$5,99'
              },

  ];
  return (
    <ScrollView style={styles.scrollView}> 
    <View style=
    {styles.container}>
      <View style={styles.profpic}>
      <Image source={require('./assets/profile.png')} style={{width:70, height:70}}/>
      </View>
      <Text style={ styles.welkies}>Welcome Back,</Text>
      <Text style={ styles.name}>Eric Atsu</Text>
      <View style={styles.searchbuttoncontainer}>
      <Pressable style={styles.searchbutton}><Ionicons name="search-outline" size={30} color="black" /></Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/Card.png')} style={{width:370, height:230, borderRadius:20}}/>
        </View>
        <View style={styles.row}>
      <Pressable style={styles.upity} onPress={() => navigation.navigate('Screen 2')}><Ionicons name="arrow-up-outline" size={30} color="black" /></Pressable>
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
      <Text style={styles.trans}>Transaction</Text>
      <View style={{alignItems:'flex-end'}}>
      <Text style={styles.see}>See all</Text>
      </View>
      <FlatList 
      horizontal={false}
      data={paw}
      renderItem={({item})=>(<View style={[styles.conco]}><Image source={item.image} style={styles.companyIcons} />
      <Text style={{fontWeight:'bold', left:70, fontSize:20, top:10}}>{item.application}</Text>
      <Text style={{left: 300, fontSize:16, alignItems:'flex-start', top:-12 }}>{item.debt}</Text>
      <Text style={{fontSize: 16, top:-7, left:70}}>{item.category}</Text>
      </View>)}
        />
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
    flex: 1,
    justifyContent:'center'
  },
  welkies:{
    alignItems: 'flex-end',
    fontSize: 20,
    top:-20,
    left: 100,
    marginBottom:5,
    color: 'grey'
  },
  name:{
    alignItems: 'flex-start',
    fontSize: 25,
    fontWeight: 'bold',
    top: -20,
    left: 100,
    marginBottom:5,
  },
  imageContainer:{
    top:-20,
    justifyContent:'center',
    left: 10,
    borderRadius: 20,
    marginBottom: 20
  },
  profpic:{
    justifyContent:'center',
    left: 15,
    borderRadius: 20,
    marginVertical:30,
    marginTop:-30,
    top:75,
  },
  upity:{
    backgroundColor:'#F2F2F3',
    width: 60,
    height:60,
    borderRadius: 28,
    justifyContent:'center',
    alignItems:'center',
    top:-20,
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
    top:-75,
    right: 20
  },
btt:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  top:-15,
  alignItems:'center',
  flex: 1,
  marginTop:5
},
bts:{
fontSize:16,
marginHorizontal:20,
right:1
},
trans:{
  fontSize:22,
  top: 10,
  left:15
},
see: {
fontSize: 16,
color:'blue',
top: -10,
right: 30
},
conco:{
  marginVertical: 15,
  marginHorizontal:10,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    borderRadius:24,
    margin:20,
  right:1,
  width: 370,
  height: 100,
  backgroundColor: 'white',
},
companyIcons:{
  width: 30, 
  height: 20, 
  resizeMode:'contain',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  flexDirection:'row',
  top: 40,
  left: 25,
  borderRadius: 7
}
});