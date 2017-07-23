import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entryReducer from './entry_reducer';
import goalReducer from './goal_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entries: entryReducer,
  goals: goalReducer,
});

export default rootReducer;
