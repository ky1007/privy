export const createLike = like => (
  $.ajax({
    method: 'DELETE',
    url: '/api/likes',
    data: { like },
  })
);

export const destroyLike = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/likes/${id}`,
  })
);
