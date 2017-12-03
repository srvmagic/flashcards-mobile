import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';


import ListDecks from '../components/ListDecks';
import AddDeck from '../components/AddDeck';

export default TabNavigator(
  {
    Decks: {
      screen: ListDecks,
      navigationOptions: {
          tabBarLabel: 'Decks',
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
