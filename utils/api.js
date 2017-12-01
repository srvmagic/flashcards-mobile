import { AsyncStorage } from 'react-native'
import * as types from '../actions/actionTypes';  
import decks from '../data/decks';

/* getDecks: return all of the decks along with their titles, questions, and answers. 
getDeck: take in a single id argument and return the deck associated with that id. 
saveDeckTitle: take in a single title argument and add it to the decks. 
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. */


function getByCategory (token, category) {
  return new Promise((res) => {
    let posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => posts[key].category === category && !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}


export function getDecksAPI(){
    return AsyncStorage.getItem(types.DECK_STORAGE_KEY)
}
export function setDecksAPI(){
    //console.log(decks)
    console.log(types.DECK_STORAGE_KEY)
    AsyncStorage.setItem(types.DECK_STORAGE_KEY,JSON.stringify(decks))
    return decks

    
}
export function getDeck(){

}
export function saveDeckTitle({ entry, key }){
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
            [key]: entry
          }))
}
export function addCardToDeck(){

}