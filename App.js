import React from 'react';
import { LogBox } from 'react-native';
import AppNavigator from './src/AppNavigator';

// Ignorar avisos desnecessários
LogBox.ignoreLogs(['Require cycle:']);

const App = () => {
  return <AppNavigator />;
};

export default App;
