import React from 'react';
import { TabNavigator } from 'react-navigation';


import ListDecks from '../components/ListDecks';
import AddDeck from '../components/AddDeck';

export default TabNavigator(
  {
    Decks: {
      screen: ListDecks,
      navigationOptions: {
          tabBarLabel: 'Decks',
          fontWeight: 'bold',
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
          tabBarLabel: 'Add a Deck',
      }
    },
  }
);
