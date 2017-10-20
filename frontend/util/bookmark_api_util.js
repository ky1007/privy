export const createBookmark = bookmark => (
  $.ajax({
    method: 'POST',
    url: '/api/bookmarks',
    data: { bookmark },
  })
);

export const destroyBookmark = bookmark => (
  $.ajax({
    method: 'DELETE',
    url: '/api/bookmarks',
    data: { bookmark },
  })
);
