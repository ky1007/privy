// Because you might want to grab reflections based on writer_id or entry_id
// TEST status: works
export const fetchReflections = reflection => (
  $.ajax({
    method: 'GET',
    url: 'api/reflections',
    data: { reflection },
  })
);

// TEST status: works 
export const createReflection = reflection => (
  $.ajax({
    method: 'POST',
    url: 'api/reflections',
    data: { reflection },
  })
);

// TEST status: works
export const destroyReflection = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reflections/${id}`,
    data: ({ id }),
  })
);

// WON'T NEED THIS
// // TEST status:
// export const fetchReflection = id => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/reflections',
//     data: { id },
//   })
// );