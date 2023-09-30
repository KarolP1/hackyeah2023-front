import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useSharedValue} from 'react-native-reanimated';
import {
  PanGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';

const SlideInViewContainer = ({children}: {children: React.ReactNode}) => {
  const SWIPE_MIN_VAL = 80;
  const heightVal = useSharedValue(SWIPE_MIN_VAL);
  const [isOpened, setIsOpened] = useState(false);
  const {height} = useWindowDimensions();
  const handlePress = () => {
    if (isOpened) {
      heightVal.value = SWIPE_MIN_VAL;
      setIsOpened(false);
    } else {
      heightVal.value = height - 0.3 * height;
      setIsOpened(true);
    }
  };

  const animatedStyles = useAnimatedStyle(() => ({
    height: withSpring(heightVal.value, {}),
  }));

  const handleGesture = (event: any) => {
    const {translationY, state} = event.nativeEvent;

    if (state === State.ACTIVE) {
      if (translationY > 0) {
        if (isOpened) {
          heightVal.value = SWIPE_MIN_VAL;
          setIsOpened(false);
        }
      } else {
        if (!isOpened) {
          heightVal.value = height - 0.3 * height;
          setIsOpened(true);
        }
      }
    }
  };
  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      <Animated.View
        style={[
          {
            width: '100%',
            backgroundColor: 'lightgrey',
            borderTopRightRadius: 20,
            borderTopStartRadius: 20,
          },
          animatedStyles,
        ]}>
        <TouchableOpacity
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
          }}
          disabled={isOpened === true}
          activeOpacity={1}
          onPress={handlePress}>
          <View
            style={{
              height: '100%',
              alignItems: 'center',
              padding: 10,
              top: 5,
            }}>
            <TouchableOpacity onPress={handlePress}>
              <View
                style={{
                  width: 200,
                  height: 10,
                  backgroundColor: 'grey',
                  borderRadius: 15,
                }}></View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              zIndex: -19,
              marginTop: SWIPE_MIN_VAL - 20,
              display: isOpened ? 'flex' : 'none',
            }}>
            <ScrollView
              contentContainerStyle={{
                width: '100%',
                height: '100%',
              }}>
              {children}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default SlideInViewContainer;

const styles = StyleSheet.create({});
