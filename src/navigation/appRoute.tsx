import React, {useContext} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {setNavigator} from './navigationRef';
import {ThemeContext} from '../context/themeContext';

//screens
import {AuthNav} from './auth';

const Stack = createNativeStackNavigator();

const AppRoute = () => {
  const {isDark} = useContext<any>(ThemeContext);
  return (
    <NavigationContainer
      theme={isDark ? DarkTheme : undefined}
      ref={navigator => {
        setNavigator(navigator);
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="auth"
          component={AuthNav}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
