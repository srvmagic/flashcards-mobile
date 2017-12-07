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
import { findIndex } from "lodash";

class DeckDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: this.props.numberQ
    };
  }  

  componentWillReceiveProps(nextProps) {

    if (nextProps.numberQ !== undefined){
      this.setState({
        total: nextProps.numberQ || 0
      });
    }


}
  render() {
    return (
      <View style={style.container}>
        <View style={style.quizLayout}>
          <Text style={style.quizFontStyle}>
            {this.props.navigation.state.params.title}
          </Text>
          <Text style={style.detailText}>{`${
            this.state.total
            
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

function mapStateToProps(state, ownProps) {
  let vv
  const index = findIndex(state.decks, { title: ownProps.navigation.state.params.title });
  if(index === -1){
vv=0
  }else {
vv= state.decks[index].questions.length
  }

  return {
    numberQ: vv || ownProps.navigation.state.params.questionsNo
  };
}

export default connect(mapStateToProps, null)(DeckDetail);
