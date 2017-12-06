import * as types from '../actions/actionTypes';  
import initialState from "./initialState"
import { findIndex } from 'lodash'

export default function cardReducer(state = initialState, action) {  

  switch(action.type) {
    case types.ADD_CARD_SUCCESS:
    const {title, question, answer} = action
    const quizItem = {question, answer}
    const index = findIndex(state.decks, {title: title});
    let targetDeck = state.decks[index];
    targetDeck.questions.push(quizItem);
    return {
        ...state,
        [title]: targetDeck
    }    
    default: 
      return state;
  }
}

