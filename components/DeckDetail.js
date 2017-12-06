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
import { connect } from "react-redux";

class DeckDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: this.props.decks
    };
  }  

  componentWillReceiveProps(nextProps) {
    this.setState({
      decks: nextProps.decks
    });
  
}
  render() {
    return (
      <View style={style.container}>
        <View style={style.quizLayout}>
          <Text style={style.quizFontStyle}>
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
            style={style.aButton}
          >
            <Text style={style.quizText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Quiz", {
                title: this.props.navigation.state.params.title,
                questions: this.props.navigation.state.params.questions
              })
            }
            style={style.bButton}
          >
           <Text style={style.quizText}>Start Quiz</Text>
           
          </TouchableOpacity>          
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  
  
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps, null)(DeckDetail);
