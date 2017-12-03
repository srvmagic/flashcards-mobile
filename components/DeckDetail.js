`import 'expo'`;
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Platform
} from "react-native";
import { style } from "../utils/style";

export default class DeckDetail extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={style.deckView}>
          <Text style={style.headerText}>
            {this.props.navigation.state.params.title}
          </Text>
          <Text style={style.detailText}>{`${
            this.props.navigation.state.params.questionsNo
          } card(s)`}</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("AddCard", {
                title: this.props.navigation.state.params.title
              })
            }
            style={style.addCardButton}
          >
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Quiz", {
                title: this.props.navigation.state.params.title,
                questions: this.props.navigation.state.params.questions
              })
            }
            style={style.startQuizButton}
          >
            <Text>Start Quiz</Text>
          </TouchableOpacity>          
        </View>
      </View>
    );
  }
}
