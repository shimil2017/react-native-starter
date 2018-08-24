import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

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
      <View style={styles.container}>
        <Text style={styles.header}>
          This is {params.user}
          's profile
        </Text>
        <Button onPress={() => navigate("Modal")} title="Open Modal" />
      </View>
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
