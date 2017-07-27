import * as APIUtil from '../util/follow_api_util';

export const receiveFollow = follow

export const createFollow = followRequest => dispatch => (
  APIUtil.follow(followRequest).then(followRequest => (
    dispatch(receiveFollow(followRequest))
  ))
);

export const destroyFollow = id => dispatch => (
  APIUtil.follow(id).then(unfollowRequest => (
    dispatch(deleteFollow(unfollowRequest))
  ))
);
