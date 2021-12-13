import React from 'react';
import {View, Text, Button} from 'react-native';

const Policy = (props: any) => {
  return (
    <View>
      <Text>Policy componenen is comming soon</Text>
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

export default Policy;
