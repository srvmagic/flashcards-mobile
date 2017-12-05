import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function deckReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DECKS_SUCCESS:
      return action.decks
    case types.SET_DECKS_SUCCESS:
      return state;
    case types.LOAD_DECK_SUCCESS:
      return action.deck;
    case types.ADD_DECK_SUCCESS:
    console.log(action.newDeck)
    console.log('action.newDeck')
    return         Object.assign({}, state, action.newDeck)
    
    default:
      return state;
  }
}
