import * as types from '../actions/actionTypes';  

export default function cardReducer(state = {}, action) {  
  switch(action.type) {
    case types.LOAD_CARDS_SUCCESS:
      return action.cards
    default: 
      return state;
  }
}

