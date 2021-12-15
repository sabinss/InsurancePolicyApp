import React from 'react';
import {View, Text, Button} from 'react-native';

export const Login = (props: any) => {
  return (
    <View>
      <Text>Login componenen is comming soon</Text>
      <Button
        title="Login"
        onPress={() => {
          props.navigation.navigate('onboarding');
        }}
      />
      <Button
        title="Activate Account"
        onPress={() => {
          props.navigation.navigate('signup');
        }}
      />
    </View>
  );
};
