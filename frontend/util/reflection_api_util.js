export const fetchReflections = reflection => (
  $.ajax({
    method: 'GET',
    url: 'api/reflections',
    data: { reflection },
  })
);

export const createReflection = reflection => (
  $.ajax({
    method: 'POST',
    url: 'api/reflections',
    data: { reflection },
  })
);

export const destroyReflection = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reflections/${id}`,
    data: ({ id }),
  })
);
