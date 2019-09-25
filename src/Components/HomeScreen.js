import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

const HomeScreen = ({navigation}) => {
  navigationOptions = {
    title: "Welcome to the app!"
  };

   _showMoreApp = () => {
    navigation.navigate("SignOut");
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Auth");
  };

  return (
    <View style={styles.container}>
      <Button title="Show me more of the app" onPress={_showMoreApp} />
      <Button title="Actually, sign me out :)" onPress={_signOutAsync} />
    </View>
  );
}

export default HomeScreen;