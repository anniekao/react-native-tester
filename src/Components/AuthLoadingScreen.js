import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

const AuthLoadingScreen = ({navigation}) => {

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigation.navigate(userToken ? "App" : "Auth");
  };

  // Render any loading content that you like here
  return (
    <View style={styles.container}>
     <ActivityIndicator />
     <StatusBar barStyle="default" />
    </View>
  );
}

export default AuthLoadingScreen;