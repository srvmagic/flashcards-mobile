`import 'expo'`;
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Platform } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as deckActions from "../actions/deckActions";
import Decks from "../components/Decks";
import { style } from "../utils/style";

class ListDecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: this.props.decks
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ decks: this.props.decks });
  }

  render() {
    if(this.props.decks.length === undefined && this.state.decks.length === undefined){
      return (
        <View style={style.container}>
        <View style={style.quizLayout}>
        <Text style={style.quizFontStyle}>There are no decks available. Please add some</Text>     
        </View>
        </View>

      )
    }
    const deckList = this.state.decks;

    const numDecks = Object.keys(deckList).length;
    const listOfDecks = Object.keys(this.state.decks).map(key => {
      return this.state.decks[key];
    });
    return (
      <View style={style.container}> 
        {
          <FlatList
            data={listOfDecks}
            renderItem={({ item, index }) => (              
              <Decks  navigation={this.props.navigation} title={item.title} questions={item.questions}  />
            )}
            keyExtractor={(item, index) => index}
          />
        }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deckActions: bindActionCreators(deckActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDecks);
