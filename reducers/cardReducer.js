import * as types from '../actions/actionTypes';  

export default function cardReducer(state = {}, action) {  
  switch(action.type) {
    case types.ADD_CARD_SUCCESS:
    let addedItem = { question: action.card.question, answer: action.card.answer}
    // let deck = state[action.card.title];
    // deck.questions.push(addedItem);
    // return {
    //     ...state,
    //     [action.card.title]: deck
    // }
    return {
      ...state,
      [action.card.title]: {
        ...state[action.card.title],
        questions: [
          ...state[action.card.title].questions,
          addedItem
        ]
      }
    };
    default: 
      return state;
  }
}

