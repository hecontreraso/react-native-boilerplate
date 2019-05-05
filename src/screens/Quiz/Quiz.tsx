import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Question } from "store/questions/types";
import { fetchQuestions } from "store/questions/actions";

interface Props {
  questions: Question[];
  fetchQuestions: any;
}
class Quiz extends React.Component<Props> {
  componentDidMount() {
    const result = this.props.fetchQuestions();
    console.log("result", result);
    // console.log("result", this.props.questions);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Entertainment: Video Games</Text>
        <View style={styles.box}>
          <Text>Unturned originally started as a Roblox game.</Text>
        </View>
        <Text>1 of 10</Text>
        <TouchableOpacity style={styles.button}>
          <Text>True</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>False</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ questions }: Props) => ({
  questions
});
export default connect(
  mapStateToProps,
  { fetchQuestions }
)(Quiz);

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
