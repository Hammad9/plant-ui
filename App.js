import * as React from 'react';
import { View, Text,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './assets/Views/Home';
import Details from './assets/Views/Details';
import COLORS from  './assets/consts/colors'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header:()=>null}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;