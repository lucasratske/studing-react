import { combineReducers } from 'redux';
import TodoReducer from '../Todo/TodoReducer';
const rootReducer = combineReducers({
  todo: TodoReducer
});

export default rootReducer;
