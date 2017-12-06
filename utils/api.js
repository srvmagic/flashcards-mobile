import { AsyncStorage } from 'react-native'
import * as types from '../actions/actionTypes';  
import decks from '../data/decks';
import { findIndex } from 'lodash'


export function getDecksAPI(){
    return AsyncStorage.getItem(types.DECK_STORAGE_KEY, ( result ) => {
      return JSON.parse( result )
  })

}
export function setDecksAPI(){
  
    AsyncStorage.setItem(types.DECK_STORAGE_KEY,JSON.stringify(decks))
  
}
export function getDeck(){

}
export function addDeckAPI(title){
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(types.DECK_STORAGE_KEY).then(result => {
            const newDeck = {title: title, questions:[]}
            
            const originalDecks = JSON.parse(result)
            const newDecks = originalDecks.concat(newDeck)
            AsyncStorage.setItem(types.DECK_STORAGE_KEY, JSON.stringify(newDecks)).then(() => {
                resolve(newDecks)
            })

        }).catch(() => {
            reject()
        })
    })

}
export function addCardToDeckAPI(title, question, answer){
  return AsyncStorage.getItem(types.DECK_STORAGE_KEY)
  .then(result => {
      const res = JSON.parse(result);
    var index = findIndex(res, {title: title});
      res[index].questions.push({question, answer});     
      AsyncStorage.setItem(types.DECK_STORAGE_KEY, JSON.stringify(res));
  })
  .then(getDecksAPI())
  .catch(error => {
    throw error;
  });
  
}