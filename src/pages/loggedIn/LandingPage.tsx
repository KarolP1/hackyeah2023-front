import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  LandingProps,
  RootNavigation,
} from '../../navigation/types/RootNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoggedInBackground} from '../../components/backgrounds/LoggedInBackground';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import SlideInView from '../../components/Lists/SlideInList';
import SlideInViewContainer from '../../components/Lists/SlideInList';

const LandingPage = () => {
  const {} = useRoute<LandingProps['route']>();
  const navigation = useNavigation<RootNavigation>();
  return (
    <LoggedInBackground>
      <View style={{height: '100%', width: '100%'}}>
        <View
          style={{
            position: 'absolute',
            zIndex: 10,
            bottom: '20%',
            borderRadius: 50,
            right: 10,
          }}>
          <TouchableOpacity>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'grey',
                borderRadius: 50,
                marginBottom: 10,
              }}></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'grey',
                borderRadius: 50,
                marginBottom: 10,
              }}></View>
          </TouchableOpacity>
        </View>
        <MapView
          style={{
            width: '100%',
            height: '100%',
            marginTop: -25,
          }}
          mapType="hybrid"
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.922,
            longitudeDelta: 0.421,
          }}
          followsUserLocation
          userLocationUpdateInterval={1000}
          onUserLocationChange={location => {
            console.log(location.currentTarget.toFixed());
          }}
        />
      </View>
      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <SlideInViewContainer>
          <Text>hello</Text>
        </SlideInViewContainer>
      </View>
    </LoggedInBackground>
  );
};

export default LandingPage;

const styles = StyleSheet.create({});
