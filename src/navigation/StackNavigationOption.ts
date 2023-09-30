import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './types/RootNavigator';

export const screenOptions:
  | NativeStackNavigationOptions
  | ((props: {
      route: RouteProp<RootStackParamList, keyof RootStackParamList>;
      navigation: any;
    }) => NativeStackNavigationOptions)
  | undefined = {
  headerShown: false,
};
