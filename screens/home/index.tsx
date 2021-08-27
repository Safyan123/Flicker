import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';


const HomeStack = () => {
  const Stack = createStackNavigator();
  return <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
  </Stack.Navigator>
}

export default HomeStack