import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export const LoggedInBackground = ({children}: {children: React.ReactNode}) => {
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView style={{}}>
      <View style={{width: '100%', height: '100%'}}>
        <ScrollView>{children}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
