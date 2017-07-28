export const follow = followRequest => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { follow: followRequest },
  })
);

export const unfollow = unfollowRequest => (
  $.ajax({
    method: 'DELETE',
    url: 'api/follows',
    data: { follow: unfollowRequest },
  })
);
