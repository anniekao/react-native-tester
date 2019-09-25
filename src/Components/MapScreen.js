import React from "react";
import { Container, Content, Text, Button} from 'native-base';

const MapScreen = ({navigation}) => {
  navigationOptions = {
    title: 'Map'
  };

   return (
    <Container>
      <Content
        contentContainerStyle={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text>Map Screen</Text>
      </Content>
    </Container>
  );
};
export default MapScreen;