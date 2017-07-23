import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entryReducer from './entry_reducer';
import goalReducer from './goal_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entries: entryReducer,
  goals: goalReducer,
});

// STATE SHAPE: 
// {
//   session: {
//     currentUser: {
//       id: 23,
//       username: asjfl,
//     },
//     errors: [],
//   },
//   entries: {
//     allEntries: {
//       1: {
//         id: 1,
//         title: "This title",
//         general: "This title",
//       },
//     },
//     current: {
//       id: 1, 
//       title: "This title",
//       general: "General stuff",
//     }
//   }
// }

export default rootReducer;
