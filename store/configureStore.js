import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer'

import thunk from 'redux-thunk';
import decks from '../data/decks';


const defaultState = {
  decks
};


export default function configureStore() {
  return createStore(
    rootReducer,
    defaultState,
    applyMiddleware(thunk)
  );
}