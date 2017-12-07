import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { findIndex } from "lodash";

export default function deckReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DECKS_SUCCESS:
      return { ...action.decks };

    case types.SET_DECKS_SUCCESS:
      return state;
    case types.LOAD_DECK_SUCCESS:
      return action.deck;
    case types.ADD_DECK_SUCCESS:
      return {
        ...action.deck
      };
    case types.ADD_CARD_SUCCESS:
    
      const title = action.title;
      const question = action.question;
      const answer = action.answer;
      const quizItem = { question, answer };
      const index = findIndex(state.decks, {title: title});
      let targetDeck = state.decks[index];
      targetDeck.questions.push(quizItem);      
      return {
        ...state,
        [index]: targetDeck
    }
      


    default:
      return state;
  }
}
