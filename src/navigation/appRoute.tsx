import React, {useState, useContext} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {View, Text, Button, Appearance} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {setNavigator} from './navigationRef';
import {ThemeContext} from '../context/themeContext';

const TestScreen = () => {
  const {isDark} = useContext<any>(ThemeContext);

  return (
    <View>
      <Text style={{color: 'red'}}>
        Test screen rendered {isDark ? 'true' : 'false'}
      </Text>
    </View>
  );
};
const Stack = createNativeStackNavigator();

const AppRoute = () => {
  const {isDark} = useContext<any>(ThemeContext);

  return (
    <NavigationContainer
      theme={isDark ? DarkTheme : undefined}
      ref={navigator => {
        setNavigator(navigator);
      }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
