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
import * as deckActions from "../actions/deckActions";


class AddDeck extends Component {

  submit = (event) => {
    this.props.actions.deckActions.addDeck(this.state.title)
    this.props.navigation.goBack();
  }
  render() {
    const {state} = this.props.navigation;

    
    return (

      <View style={{flex:1}}>
      <View style={style.AddDeck}>
      <Text style={style.headingText}>What is the title of your new deck?</Text>
        <TextInput
         style={style.inputStyle}
          style={{height: 40}}
          placeholder="Deck Title"
          onChangeText={(text) => this.setState({title:text})}
        />
          <TouchableOpacity
            onPress={this.submit}
            
            style={style.submitBtnText}
          >
            <Text >Submit</Text>
          </TouchableOpacity>          
      </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deckActions: bindActionCreators(deckActions, dispatch)
    }
  };
}
function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
