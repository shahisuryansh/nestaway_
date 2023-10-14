// store.js
import { createStore, combineReducers } from 'redux';
import { propertiesReducer } from './reducers';

const rootReducer = combineReducers({
  properties: propertiesReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;
