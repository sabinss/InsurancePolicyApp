import React from 'react';
import {View, Text, Button} from 'react-native';

interface Props {
  handleNext: () => void;
  handleSkip: () => void;
}

const Welcome = (props: Props) => {
  return (
    <View>
      <Text>Welcome componenen is comming soon</Text>
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

export default Welcome;
