import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

const SignInScreen = ({navigation}) => {
  navigationOptions = {
    title: "Simple Sign in Says...Login"
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    navigation.navigate("App");
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in!" onPress={_signInAsync} />
    </View>
  );
};

export default SignInScreen