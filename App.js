
import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { loadDecks, setDecks } from "./actions/deckActions";
import { Constants } from "expo";
import { blue } from "./utils/colors";
import ListDecks from "./components/ListDecks";
import DeckDetail from "./components/DeckDetail";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";
import RootNavigator from "./navigation/RootNavigator";
import { clearLocalNotification, setLocalNotification } from "./utils/helpers";

const store = configureStore()
store.dispatch(setDecks())
store.dispatch(loadDecks())

function AStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  componentDidMount(){
  
    setLocalNotification()
  }  
  render() {

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AStatusBar backgroundColor={blue} barStyle="light-content" />
          <RootNavigator />
        </View>
        </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

