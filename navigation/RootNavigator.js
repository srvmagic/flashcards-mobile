import { Notifications } from "expo";
import React from "react";
import { StackNavigator } from "react-navigation";
import * as colors from "../utils/colors";

import TabNavigator from "./MainTabNavigator";
import DeckDetail from "../components/DeckDetail";
import AddCard from "../components/AddCard";
import Quiz from "../components/Quiz";

const RootStackNavigator = StackNavigator({
  Main: {
    screen: TabNavigator,
    navigationOptions: { ...navigationOptions, title: "Quizlet" }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: { ...navigationOptions, title: "QuizCards" }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: { ...navigationOptions, title: "Add A Card" }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: { ...navigationOptions, title: "Quiz" }
  }
});

const navigationOptions = {
  headerTintColor: colors.purple,
  headerTitleStyle: {
    fontWeight: "normal"
  },
  headerStyle: {
    backgroundColor: colors.purple
  }
};

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
