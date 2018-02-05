import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
// import rootReducer from './reducers';

export default createStore(
  combineReducers({
       form: formReducer
   }),
  compose(
    applyMiddleware(createLogger(), thunk)
  ),
);
