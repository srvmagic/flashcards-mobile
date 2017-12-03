import * as types from "../actions/actionTypes";

export default function deckReducer(state = {}, action) {
  switch (action.type) {
    case types.LOAD_DECKS_SUCCESS:
      return action.decks;
    case types.SET_DECKS_SUCCESS:
      return action.decks;
    case types.LOAD_DECK_SUCCESS:
      return action.deck;
    case types.ADD_DECK_SUCCESS:
    console.log(action.decks)
    return action.decks

    default:
      return state;
  }
}
