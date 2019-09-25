import React from 'react';
import { Container, Content, Text, Header, Button } from 'native-base';

const ModalScreen = ({navigation}) => {
  return (
    <Container
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ fontSize: 30 }}>
        Modal Yodel
      </Text>
      <Button 
        title="Dismiss"
        onPress={() => navigation.goBack()}
      />
    </Container>
  );
};

export default ModalScreen;