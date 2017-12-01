import {setDecksAPI, getDecksAPI} from "../utils/api";
import * as types from "./actionTypes";
import { AsyncStorage } from 'react-native'

export function loadDecksSuccess(decks) {
  console.log(decks)
  return {
    type: types.LOAD_DECKS_SUCCESS,
    decks
  };
}


export function loadDecks() {  
 console.log('in here')
  return function(dispatch) {
    return getDecksAPI().then(decks => {
      dispatch(loadDecksSuccess(decks));
    }).catch(error => {
      throw(error);
    });
  };
}


export function setDecksSuccess(decks) {
  console.log(decks)
  return {
    type: types.SET_DECKS_SUCCESS,
    decks
  };
}


export function setDecks() {  
  setDecksAPI()
 console.log('in set decks ')
  return function(dispatch) {
    setDecksAPI()
    return AsyncStorage.getItem(types.DECK_STORAGE_KEY).then(decks => {
      console.log('decks');
      console.log(decks);      
      dispatch(setDecksSuccess(decks));
    }).catch(error => {
      throw(error);
    });
  };
}