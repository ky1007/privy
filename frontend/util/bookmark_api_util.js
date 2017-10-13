export const createBookmark = bookmark => (
  $.ajax({
    method: 'POST',
    url: '/api/bookmarks',
    data: { bookmark },
  })
);

export const destroyBookmark = bookmarkId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bookmarks/${bookmarkId}`,
  })
);
