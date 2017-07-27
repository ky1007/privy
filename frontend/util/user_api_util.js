export const fetchUsers = searchCriteria => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { searchCriteria },
  })
);

export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
  })
);

