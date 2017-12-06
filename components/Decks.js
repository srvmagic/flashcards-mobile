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
import { style} from "../utils/style"
import * as deckActions from "../actions/deckActions";
import { connect } from "react-redux";

class Decks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: this.props.decks
    };
  }  
  componentWillReceiveProps(nextProps) {
    this.setState( {
      decks: this.props.decks
    })
  }
  render() {
  
    const len = (this.props.questions && this.props.questions.length > 0) ? this.props.questions.length :0   
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetail', {title: this.props.title, questions: this.props.questions, questionsNo: len} )}>
        <View style={ style.item }>
          <Text style={style.title}>{this.props.title}</Text>
          <Text style={style.numerics}>{`${len} card(s)`}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps, null)(Decks);
