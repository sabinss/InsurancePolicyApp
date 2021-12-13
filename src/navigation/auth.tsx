import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screen from '../screens';

const AuthStack = createNativeStackNavigator();

export const AuthNav = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="login" component={screen.Login} />
      <AuthStack.Screen name="signup" component={screen.SignUp} />
    </AuthStack.Navigator>
  );
};
