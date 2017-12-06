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
    console.log('state.decks')
    console.log(state)
    const deckst = state || state.decks
    console.log(deckst)
      const title = action.title;
      const question = action.question;
      const answer = action.answer;

      console.log(title)
      
      const quizItem = { question, answer };
      return deckst.map((item, idx) => {
        if(title !== item.title) {
          return item;
      }     
      return {
        ...item,
        ...item.questions.push(quizItem)
      }   
      })
    default:
      return state;
  }
}
