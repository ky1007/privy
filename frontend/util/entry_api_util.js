export const fetchEntries = username => (
  $.ajax({
    method: 'GET',
    url: '/api/entries',
    data: { username },
  })
);

export const fetchEntry = id => (
  $.ajax({
    method: 'GET',
    url: `/api/entries/${id}`,
    data: { id },
  })
);

export const destroyEntry = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/entries/${id}`,
    data: { id },
  })
);

export const createEntry = entry => (
  $.ajax({
    method: 'POST',
    url: '/api/entries',
    data: { entry },
  })
);

export const updateEntry = entry => (
  $.ajax({
    method: 'PATCH',
    url: `/api/entries/${entry.id}`,
    data: { entry },
  })
);

export const fetchFeedEntries = id => (
  $.ajax({
    method: 'GET',
    url: 'api/follows',
    data: { id },
  })
);
