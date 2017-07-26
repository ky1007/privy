import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entryReducer from './entry_reducer';
import goalReducer from './goal_reducer';
import reflectionReducer from './reflection_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entries: entryReducer,
  goals: goalReducer,
  reflections: reflectionReducer,
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
