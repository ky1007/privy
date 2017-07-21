import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entryReducer from './entry_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entries: entryReducer,
});

export default rootReducer;
