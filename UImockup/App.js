
import {Text,View} from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab= createBottomTabNavigator();
export default function App() {
  const screenOptions={
    tabBarShowlabel:false,
    headerShown: false,
    tabBarStyle:{
      position:'absolute',
      right:0,
      botton:0,
      elevation:0,
      background:'blue',
      fontSize:20
    }
  }
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Home' component={Screen1}
        options={{
          tabBarIcon: ({})=>{
            return(
          <Ionicons name="home-outline" size={30} color="black" />
            )
        }}
      }
        />
        <Tab.Screen name='My Cards' component={Screen2} 
         options={{
          tabBarIcon: ({})=>{
            return(
          <Ionicons name="card-outline" size={30} color="black" />
            )
        }}
      }
      />
        <Tab.Screen name='Statistics' component={Screen2} 
         options={{
          tabBarIcon: ({})=>{
            return(
          <Ionicons name="pie-chart-outline" size={30} color="black" />
            )
        }}
      }
      />
        <Tab.Screen name="settings" component={Screen2} 
         options={{
          tabBarIcon: ({})=>{
            return(
          <Ionicons name="settings-outline" size={30} color="black" />
            )
        }}
      }
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
