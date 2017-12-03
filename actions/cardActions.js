import { addCardToDeckAPI } from "../utils/api";
import * as types from "./actionTypes";
import { AsyncStorage } from "react-native";
export function addCardSuccess(card) {
  return {
    type: types.ADD_CARD_SUCCESS,
    card
  };
}

export function addCard(title, question, answer) {
  return function(dispatch) {
    return addCardToDeckAPI(title,  question, answer)
      .then(card => {
          console.log('card')
          console.log(card)
        dispatch(addCardSuccess({title:title,  question:question, answer:answer}));
      })
      .catch(error => {
        throw error;
      });
  };
}
