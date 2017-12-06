import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { findIndex } from "lodash";

export default function deckReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DECKS_SUCCESS:
      return [{ ...action.decks }];

    case types.SET_DECKS_SUCCESS:
      return state;
    case types.LOAD_DECK_SUCCESS:
      return action.deck;
    case types.ADD_DECK_SUCCESS:
      return {
        ...state,
        ...action.deck
      };
    case types.ADD_CARD_SUCCESS:
      const { title, question, answer } = action;
      const quizItem = { question, answer };
      const index = findIndex(state, { title: title });
      let targetDeck = state[index];
      targetDeck.questions.push(quizItem);
      return state.map((item, idx) => {
        if(idx !== index) {
          // This isn't the item we care about - keep it as-is
          return item;
      }     
      return {
        ...item,
        ...targetDeck
      }   
      })
    default:
      return state;
  }
}
