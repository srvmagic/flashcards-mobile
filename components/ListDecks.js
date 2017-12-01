`import 'expo'`;
import React, { Component } from "react";

import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { blue } from "./utils/colors";

export default class ListDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
        decks: []
    };
  }
  componentDidMount() {
    this.props.deckActions.loadDecks().then(decks => this.setState(decks))
  }  
  render() {
    console.log(this.state);
    return <View />;
  }
}
