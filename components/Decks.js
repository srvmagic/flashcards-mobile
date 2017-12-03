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

export default class Decks extends Component {
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
