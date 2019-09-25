import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

const SignOutScreen = (props) => {
  static navigationOptions = {
    title: "Lots of features here"
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Auth");
  };

  return (
    <View style={styles.container}>
     <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
     <StatusBar barStyle="default" />
    </View>
  );
}

export default SignOutScreen;