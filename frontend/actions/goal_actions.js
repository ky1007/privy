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

export const createGoal = goal => dispatch => (
  APIUtil.createGoal(goal).then(goal => (
    dispatch(receiveGoal(goal))
  ))
);

export const fetchGoals = goal => dispatch => (
  APIUtil.fetchGoals(goal).then(goal => (
    dispatch(receiveGoals(goal))
  ))
);

export const fetchGoal = id => dispatch => (
  APIUtil.fetchGoal(id).then(goal => (
    dispatch(receiveGoal(goal))
  ))
);

export const destroyGoal = id => dispatch => (
  APIUtil.destroyGoal(id).then(goal => (
    dispatch(receiveGoal(goal))
  ))
);

export const updateGoal = goal => dispatch => (
  APIUtil.updateGoal(goal).then(goal => (
    dispatch(receiveUpdatedGoals(goal))
  ))
);

