export const createBookmark = entryId => (
  $.ajax({
    method: 'POST',
    url: '/api/bookmarks',
    data: { entryId },
  })
);

export const destroyBookmark = bookmarkId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bookmarks/${bookmarkId}`,
  })
);
