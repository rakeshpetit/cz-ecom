import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ecommerce</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: "10%",
    paddingBottom: "20%",
    backgroundColor: "white",
    width: "100%"
  },
  titleText: {
    color: "#fff",
    fontSize: 30
  }
});

export default Home;
