import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {setNavigator} from './navigationRef';

const TestScreen = () => {
  return (
    <View>
      <Text>Test screen rendered</Text>
    </View>
  );
};
const Stack = createNativeStackNavigator();

const AppRoute = () => {
  return (
    <NavigationContainer
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
