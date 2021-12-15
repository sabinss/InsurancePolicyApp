import React from 'react';
import {View, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

enum IndicatorShape {
  'REACTANVE',
  'CIRCLE',
}

interface SwipingIndicatorProps {
  activeColor?: string;
  inactiveColor?: string;
  shape?: IndicatorShape;
  count?: number | undefined;
  activeIndex?: number;
}
// height: 30,
// width: 30,
// borderRadius: 30,
const INDICATOR_HEIGHT = 10;
const ACTIVE_INDICATOR_WIDTH = 10;
const INACTIVE_INDICATOR_WIDTH = 10;
const boarderRadius = 10;

const SwipingIndicator = (props: SwipingIndicatorProps) => {
  const number = new Array(props.count).fill(null);
  console.log(number, 'number');
  return (
    <View style={styles.defaultStyle}>
      {number.map((x, index) => {
        // const i = index + 1;
        return (
          <View
            key={index}
            style={[
              {
                backgroundColor:
                  index == props.activeIndex
                    ? props.activeColor
                    : props.inactiveColor,
                borderRadius: normalize(boarderRadius),
              },
              index == props.activeIndex
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}></View>
        );
      })}
    </View>
  );
};

export {SwipingIndicator};

SwipingIndicator.defaultProps = {
  activeColor: '#6F82DE',
  inactiveColor: '#dbdbdb',
  shape: 'RECTANGLE',
  count: 3,
  activeIndex: 1,
};

const styles = StyleSheet.create({
  defaultStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: normalize(60),
  },
  activeIndicator: {
    height: INDICATOR_HEIGHT,
    margin: 4,
    width: ACTIVE_INDICATOR_WIDTH,
    borderRadius: normalize(boarderRadius),
  },
  inactiveIndicator: {
    height: INDICATOR_HEIGHT,
    margin: 4,
    width: INACTIVE_INDICATOR_WIDTH,
    borderRadius: normalize(boarderRadius),
  },
});
