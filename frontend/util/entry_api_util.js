export const fetchEntries = writer_id => (
  $.ajax({
    method: 'GET',
    url: '/api/entries',
    data: writer_id,
  })
);

export const fetchEntry = id => (
  $.ajax({
    method: 'GET',
    url: '/api/entries',
    data: id,
  })
);

export const createEntry = entry => (
  $.ajax({
    method: 'POST',
    url: '/api/entries',
    data: entry,
  })
);

export const updateEntry = entry => (
  $.ajax({
    method: 'PATCH',
    url: '/api/entries',
    data: entry,
  })
);
