import { combineReducers } from "redux";
import {dogsReducer} from './dogsReducer';
// import {favsReducer} from './favsReducer';

export const rootReducer = combineReducers({
  dogs: dogsReducer,
  // favs: favsReducer,
});
