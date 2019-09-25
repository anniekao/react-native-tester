import React from 'react';
import { View, Text, Button, ImageBackground, Dimensions } from "react-native";
import { Thumbnail } from 'native-base';

const ProfileScreen = ({navigation}) => {
  navigationOptions = {
    title: 'Profile'
  }
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <ImageBackground
        style={{
          height: "70%",
          width: "100%",
          alignItems: "center",
        }}
        source={require("../../assets/streetart-bg.jpg")}
      >
       
        <Thumbnail
          style={{
            height: 150,
            width: 150,
            borderRadius: 75,
            borderColor: "black",
            marginTop: 40
          }}
          source={require("../../assets/ralph-profile.jpeg")}
        />
        <Text
          style={{ backgroundColor: "black", color: "white", fontSize: 20 }}
        >
          Ralph Wiggum
        </Text>
        <Text style={{ backgroundColor: "black", color: "white" }}>
          Me fail English? That's unpossible!
        </Text>
        <Text style={{ backgroundColor: "black", color: "white" }}>
          Location: Springfield, IL
        </Text>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;