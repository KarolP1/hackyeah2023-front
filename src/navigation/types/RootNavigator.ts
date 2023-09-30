import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  loggedIn: undefined;
  loggedOut: undefined;
};

export type LandingProps = NativeStackScreenProps<
  RootStackParamList,
  'loggedIn'
>;

export type RootNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'loggedIn'
>;
