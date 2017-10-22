import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entryReducer from './entry_reducer';
import goalReducer from './goal_reducer';
import reflectionReducer from './reflection_reducer';
import userReducer from './user_reducer';
import bookmarkReducer from './bookmark_reducer';
import loadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entries: entryReducer,
  goals: goalReducer,
  reflections: reflectionReducer,
  users: userReducer,
  bookmarks: bookmarkReducer,
  loading: loadingReducer,
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
//         writer: "Tim",
//         followed: true
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
