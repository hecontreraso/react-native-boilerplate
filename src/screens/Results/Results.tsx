import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const render = ({ item }) => (
  <React.Fragment>
    <AntDesign name="checkcircle" size={32} color="green" />
    <Text>{item.question}</Text>
  </React.Fragment>
);

const Results = () => (
  <View style={styles.container}>
    <Text>You scored</Text>
    <Text>3/10</Text>
    <FlatList data={data} renderItem={render} />
    <TouchableOpacity style={styles.button}>
      <Text>PLAY AGAIN?</Text>
    </TouchableOpacity>
  </View>
);

export default Results;

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
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 400
  }
});
