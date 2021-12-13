import React from 'react';
import {View, Text, Button} from 'react-native';

const OnlinePayment = (props: any) => {
  return (
    <View>
      <Text>OnlinePayment componenen is comming soon</Text>
      <Button
        title="Skip"
        onPress={() => {
          props.handleSkip();
        }}
      />
      <Button
        title="Next"
        onPress={() => {
          props.handleNext();
        }}
      />
    </View>
  );
};

export default OnlinePayment;
