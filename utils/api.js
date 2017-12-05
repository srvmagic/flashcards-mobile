import { AsyncStorage } from 'react-native'
import * as types from '../actions/actionTypes';  
import decks from '../data/decks';

export function getDecksAPI(){
    return AsyncStorage.getItem(types.DECK_STORAGE_KEY, ( result ) => {
        console.log(result)
      return JSON.parse( result )
  })

}
export function setDecksAPI(){
  
    AsyncStorage.setItem(types.DECK_STORAGE_KEY,JSON.stringify(decks))
    return decks

    
}
export function getDeck(){

}
export function addDeckAPI(title){
  return AsyncStorage.mergeItem( types.DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
        title: title,
        questions: []
    }
}))

}
export function addCardToDeckAPI(title, question, answer){
  return AsyncStorage.getItem(types.DECK_STORAGE_KEY)
  .then(result => {
      const res = JSON.parse(result);
      res[title].questions.push({question, answer});
      AsyncStorage.setItem(types.DECK_STORAGE_KEY, JSON.stringify(res));
  })
  .then(getDecksAPI())
  .catch(error => {
    throw error;
  });
  
}