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
import { clearLocalNotification } from "../utils/helpers";

class Quiz extends Component {
  state = {
    viewAnswer: false,
    question: 1,
    score: 0
  };
  componentDidMount(){
    
    clearLocalNotification()
    } 
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
                  {`Answer: ${
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
                <Text >Show Answer</Text>
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
              style={style.aButton}
            >
              <Text style={style.quizText}>Correct</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.setState({
                  question: this.state.question + 1,
                  viewAnswer: false
                })
              }
              style={style.bButton}
            >
              <Text style={style.quizText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={style.quizLayout}>
          <Text style={style.scoreHeading}>
            End of Quiz
          </Text>
          <Text >
            Your Score {`${this.state.score}`} out of {`${totalNumberOfQuestions}`}
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                question: 1,
                score: 0,
                viewAnswer: false
              });
            }}
            style={style.aButton}
          >
            <Text style={style.quizText}>Restart Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={style.aButton}
          >
            <Text style={style.quizText}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

export default Quiz;
