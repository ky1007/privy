export const follow = followRequest => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { followRequest },
  })
);

export const unfollow = unfollowRequest => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { unfollowRequest },
  })
);
