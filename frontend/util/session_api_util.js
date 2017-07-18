export const signup = userData => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: userData
  })
);

export const login = userData => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: userData
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);

// BELOW SHOULD BE TEMP:
window.signup = signup;
window.logout = logout;
window.login = login;
