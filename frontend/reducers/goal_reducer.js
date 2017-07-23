import merge from 'lodash/merge';

import { RECEIVE_GOALS, RECEIVE_GOAL } from '../actions/goal_actions';

// WHAT ACTION LOOKS LIKE COMING IN
// {
//   allGoals: {
//     1: {
//       id: 1,
//       moreStuff: 2,
//     }
//   }
//   current: {
//     id: 1,
//     moreStuff: 1,
//   }
// }

const goalReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    
    case RECEIVE_GOALS:
      const goals = { allGoals: action.allGoals };
      return merge({}, state, goals);
    
    case RECEIVE_GOAL:
      return merge({}, state, { current: action.current });
    
    default:
      return state;
  }
};

export default goalReducer;
