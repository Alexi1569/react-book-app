import { combineReducers } from 'redux';
import userReducer from './user';
import bookReducer from './book';

const rootReducer = combineReducers({
  userReducer,
  bookReducer
});

export default rootReducer;
