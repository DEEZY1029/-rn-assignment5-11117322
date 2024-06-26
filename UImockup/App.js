
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack= createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="screen 1" component={Screen1} />
        <Stack.Screen name="Screen 2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
