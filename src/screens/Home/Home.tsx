import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {}
const Home = (props: Props) => (
  <View style={styles.container}>
    <Text>Welcome to the Trivia Challenge!</Text>
    <Text>You will be presented with 10 True or False questions.</Text>
    <Text>Can you score 100%?</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate("Quiz")}
    >
      <Text>BEGIN</Text>
    </TouchableOpacity>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgray",
    flex: 1
  },
  button: {
    fontSize: 20,
    padding: 5
  }
});
