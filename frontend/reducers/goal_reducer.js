import merge from 'lodash/merge';
import { RECEIVE_GOALS, RECEIVE_GOAL } from '../actions/goal_actions';

const initialState = {
  allGoals: null,
  current: null,
};

const goalReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    
    case RECEIVE_GOALS:
      const goals = { allGoals: action.allGoals };
      return Object.assign({}, state, goals);
    
    case RECEIVE_GOAL:
      const newState = merge({}, state);
      newState.current = { current: action.current };
      if (newState.allGoals[action.current.id]) {
        newState.allGoals[action.current.id] = action.current;
      }
      return newState;

    default:
      return state;
  }
};

export default goalReducer;

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
//
