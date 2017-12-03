import * as types from '../actions/actionTypes';  

export default function cardReducer(state = {}, action) {  
  switch(action.type) {
    case types.ADD_CARD_SUCCESS:
    console.log(action)
    let addedItem = { question: action.card.question, answer: action.card.answer}
    console.log('action.card.question')
    console.log(action.card.question)
    console.log('action.card.answer')
    console.log(action.card.answer)
    console.log('action.card.title')
    console.log(action.card.title)
    let deck = state[action.card.title];
    console.log(deck)
    deck.questions.push(addedItem);
    return {
        ...state,
        [action.card.title]: deck
    }

    default: 
      return state;
  }
}

