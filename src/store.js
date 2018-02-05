import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import rootReducer from './reducers/reducer';

export default createStore(
  combineReducers({
       form: formReducer,
       rootReducer: rootReducer
       
   }),
  compose(
    applyMiddleware(createLogger(), thunk)
  ),
);
