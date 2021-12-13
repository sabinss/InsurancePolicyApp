import React, {useState} from 'react';
import {View} from 'react-native';
import OnlinePayment from './online_payment';
import Policy from './policy';
import Welcome from './welcome';
import {SwipingIndicator} from '../../components/common';

const Onboarding = (props: any) => {
  const [activeScreen, setActiveScreen] = useState(0);
  const hadleSkip = () => {
    if (activeScreen < onboarding_screens.length - 1) {
      props.navigation.navigate('main');
    }
  };
  const handleNext = () => {
    if (activeScreen < onboarding_screens.length - 1) {
      setActiveScreen(prev => prev + 1);
    } else {
      props.navigation.navigate('main');
    }
  };
  const onboarding_screens = [
    <Welcome handleNext={handleNext} handleSkip={hadleSkip} {...props} />,
    <OnlinePayment handleNext={handleNext} {...props} />,
    <Policy handleNext={handleNext} {...props} />,
  ];

  return (
    <View>
      {onboarding_screens[activeScreen]}
      <SwipingIndicator activeIndex={activeScreen} />
    </View>
  );
};

export default Onboarding;
