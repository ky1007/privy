import * as APIUtil from '../util/goal_api_util';

export const RECEIVE_UPDATED_GOALS = 'RECEIVE_GOALS';
export const RECEIVE_GOALS = 'RECEIVE_GOALS';
export const RECEIVE_GOAL = 'RECEIVE_GOAL';
export const CLEAR_GOALS = 'CLEAR_GOALS';

export const receiveUpdatedGoals = current => ({
  type: RECEIVE_UPDATED_GOALS,
  current,
});

export const receiveGoals = allGoals => ({
  type: RECEIVE_GOALS,
  allGoals,
});

export const receiveGoal = current => ({
  type: RECEIVE_GOAL,
  current,
});

export const clearGoals = () => ({
  type: CLEAR_GOALS,
  allGoals: null,
});

// ajax TESTED TO WORK, state works!
export const createGoal = goal => dispatch => (
  APIUtil.createGoal(goal).then(goal => (
    dispatch(receiveGoal(goal))
  ))
);

// ajax TESTED TO WORK (only returns 1?), same with state (only returns 1)!
export const fetchGoals = goal => dispatch => (
  APIUtil.fetchGoals(goal).then(goal => (
    dispatch(receiveGoals(goal))
  ))
);

// ajax TESTED TO WORK, same with state! USED: dispatch(fetchGoal(2));
export const fetchGoal = id => dispatch => (
  APIUtil.fetchGoal(id).then(goal => (
    dispatch(receiveGoal(goal))
  ))
);

// ajax TESTED TO WORK, same with state! USED: dispatch(destroyGoal(2));
export const destroyGoal = id => dispatch => (
  APIUtil.destroyGoal(id).then(goal => (
    dispatch(receiveGoal(goal))
  ))
);

// untested, will test after React components are built
export const updateGoal = goal => dispatch => (
  APIUtil.updateGoal(goal).then(goal => (
    dispatch(receiveUpdatedGoals(goal))
  ))
);

