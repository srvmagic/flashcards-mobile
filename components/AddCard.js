`import 'expo'`;
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Platform,
  TextInput
} from "react-native";
import { style } from "../utils/style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cardActions from "../actions/cardActions";


class AddCard extends Component {

  submit = (event) => {
    const { question, answer } = this.state;
    this.props.actions.cardActions.addCard(this.props.navigation.state.params.title,question,answer)
    this.props.navigation.goBack();
  }
  render() {
    const {state} = this.props.navigation;

    
    return (

      <View style={{flex:1}}>
      <View style={style.AddQuiz}>
        <TextInput
         style={style.addCardInput}
          style={{height: 40}}
          placeholder="Type question here"
          onChangeText={(text) => this.setState({question:text})}
        />
        <TextInput
         style={style.addCardInput}
          style={{height: 40}}
          placeholder="Type answer here"
          onChangeText={(text) => this.setState({answer:text})}
        />
          <TouchableOpacity
            onPress={this.submit}
            
            style={style.addQuizItemButton}
          >
            <Text style={style.submitBtnText}>Submit</Text>
          </TouchableOpacity>          
      </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      cardActions: bindActionCreators(cardActions, dispatch)
    }
  };
}
function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
