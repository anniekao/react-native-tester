import React from "react";
import { Container, Content, Text, Button, Header, Left, Right, Body} from 'native-base';

const FeedScreen = ({navigation}) => {
   return (
    <Container>
      <Header style={{backgroundColor:'#f46036'}}>
        <Left style={{flex:1}}/>
        <Body style={{flex:1, alignItems:'center', justifyContent: "center"}}>
          <Text style={{color:'#fdfffc', fontWeight:'bold'}}>My Feed</Text>
        </Body>
        <Right style={{flex:1}}/>
      </Header>
      <Content
        contentContainerStyle={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
      </Content>
    </Container>
  );
};

export default FeedScreen;