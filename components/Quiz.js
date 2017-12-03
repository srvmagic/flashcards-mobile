import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  styleheet,
  TouchableOpacity,
  Animated
} from "react-native";
import { style } from "../utils/style";

class Quiz extends Component {
  state = {
    viewAnswer: false,
    question: 1,
    score: 0
  };

  render() {
    const totalNumberOfQuestions = this.props.navigation.state.params.questions
      .length;
    const questionList = this.props.navigation.state.params.questions;

    if (this.state.question <= totalNumberOfQuestions) {
      return (
        <View style={style.container}>
          <Text style={style.counterText}>
            {this.state.question} of {totalNumberOfQuestions}
          </Text>

          <View style={style.quizLayout}>
            <Text style={style.quizFontStyle}>
              {questionList[this.state.question - 1].question}
            </Text>

            {this.state.viewAnswer ? (
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    viewAnswer: false
                  })
                }
                style={style.correctButton}
              >
                <Text>
                  {`The answer is: ${
                    questionList[this.state.question - 1].answer
                  }.`}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    viewAnswer: true
                  })
                }
                style={style.correctButton}
              >
                <Text style={style.examButtonText}>Show Answer</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() =>
                this.setState({
                  question: this.state.question + 1,
                  score: this.state.score + 1,
                  viewAnswer: false
                })
              }
              style={style.correctButton}
            >
              <Text style={style.examButtonText}>Corrent</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.setState({
                  question: this.state.question + 1,
                  viewAnswer: false
                })
              }
              style={style.incorrectButton}
            >
              <Text style={style.examButtonText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={style.scoreHeading}>
            End of Quiz - Here is your score {`${this.state.score}`} out of {`${totalNumberOfQuestions}`}
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                question: 1,
                score: 0,
                viewAnswer: false
              });
            }}
            style={style.correctButton}
          >
            <Text style={style.examButtonText}>Restart Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={style.correctButton}
          >
            <Text style={style.examButtonText}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

function mapStateToProps(state, { navigation }) {
  const { title } = navigation.state.params;

  return {
    deck: state[title]
  };
}

export default connect(mapStateToProps)(Quiz);
