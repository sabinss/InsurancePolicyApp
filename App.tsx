/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from './src/context/themeContext';
import {Appearance} from 'react-native';
import AppRoute from './src/navigation/appRoute';

const App = () => {
  const colorScheme = Appearance.getColorScheme();

  return (
    <ThemeProvider isDark={colorScheme == 'dark' ? true : false}>
      <AppRoute />
    </ThemeProvider>
  );
};

export default App;
