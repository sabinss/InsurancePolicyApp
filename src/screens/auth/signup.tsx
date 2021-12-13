import React from 'react';
import {View, Text, Button} from 'react-native';

export const SignUp = (props: any) => {
  return (
    <View>
      <Text>SignUp componenen is comming soon</Text>
      <Button
        title="Go back to login"
        onPress={() => {
          props.navigation.navigate('login');
        }}
      />
    </View>
  );
};
