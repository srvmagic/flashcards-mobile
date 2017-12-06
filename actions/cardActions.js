import { addCardToDeckAPI } from "../utils/api";
import * as types from "./actionTypes";
import { AsyncStorage } from "react-native";
export function addCardSuccess(title,  question, answer) {
  return {
    type: types.ADD_CARD_SUCCESS,
    title,  question, answer

  };
}

export function addCard(title, question, answer) {
  const card = {title:title,  question:question, answer:answer}
  return function(dispatch) {
    return addCardToDeckAPI(title,  question, answer)
      .then(card => {
        dispatch(addCardSuccess(title,  question, answer));
      })
      .catch(error => {
        throw error;
      });
  };
}
