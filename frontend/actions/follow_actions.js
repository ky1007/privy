import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';

export const receiveFollow = following => ({
  type: RECEIVE_FOLLOW,
  following,
});

export const createFollow = followRequest => dispatch => (
  APIUtil.follow(followRequest).then(followRequest => (
    dispatch(receiveFollow(followRequest))
  ))
);

export const destroyFollow = unfollowRequest => dispatch => (
  APIUtil.unfollow(unfollowRequest).then(unfollowRequest => (
    dispatch(receiveFollow(unfollowRequest))
  ))
);
