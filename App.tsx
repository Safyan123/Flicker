import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import HomeScreen from './screens/home/HomeScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen />
    </>
  );
};

export default App;
