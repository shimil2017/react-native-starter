import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Button,
  Content,
  Card,
  CardItem,
  Body,
  Left,
  Icon,
  Title,
  Right,
  Text
} from "native-base";
export default class Profile extends Component {
  static navigationOptions = {
    title: "What to do today?",

    headerStyle: {
      backgroundColor: "#16a085",
      height: 85
    },
    headerTitleStyle: {
      color: "white",
      fontWeight: "bold",
      color: "#fff",
      zIndex: 1,
      fontSize: 18,
      lineHeight: 23,
      fontFamily: "CircularStd-Bold"
    },
    headerTruncatedBackTitle: "Nah"
  };

  render() {
    // Pull navigate out of this.props.navigation
    // and params out of this.props.navigation.state
    const {
      navigate,
      state: { params }
    } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Button disabled>
            <Text>Default</Text>
          </Button>
          <Button disabled bordered>
            <Text>Outline</Text>
          </Button>
          <Button disabled rounded>
            <Text>Rounded</Text>
          </Button>
          <Button disabled large>
            <Text>Custom</Text>
          </Button>
          <Button disabled iconRight>
            <Text>Icon Button</Text>
          </Button>
          <Button disabled block>
            <Text>Block</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 20,
    marginVertical: 20
  }
});
