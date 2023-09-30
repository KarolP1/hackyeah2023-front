import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  LandingProps,
  RootNavigation,
} from '../../navigation/types/RootNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoggedInBackground} from '../../components/backgrounds/LoggedInBackground';

const LandingPage = () => {
  const {} = useRoute<LandingProps['route']>();
  const navigation = useNavigation<RootNavigation>();
  return (
    <LoggedInBackground>
      <View style={{}}>
        <Text>LandingPage</Text>
      </View>
    </LoggedInBackground>
  );
};

export default LandingPage;

const styles = StyleSheet.create({});
