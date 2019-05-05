import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

class Quiz extends React.Component {
  componentDidMount() {
    // const result = this.props.fetchQuestions();
    // console.log("result", result);
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

// export default Quiz;

// const mapStateToProps = ({ questions }: { questions: Question[] }) => ({
//   questions
// });
export default connect()(Quiz);

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
