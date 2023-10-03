// store.js
import { createStore } from 'redux';
import { combineReducers } from 'redux';
// Import your root reducer
import isQuetionReducer from '../Redux/isQuetionReducer'


const rootReducer = combineReducers({
    isQuetionReducer: isQuetionReducer, 
  });



const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;

