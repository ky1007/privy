import React from 'react';
import { Link } from 'react-router-dom';

const createSessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Signup</Link>
  </nav>
);

const loggedInLinks = (currentUser, logout) => (
  <div>
    <Link to="/new_entry">New Entry</Link>
    <button onClick={logout} className="logout-button">Logout</button>
  </div>
);

const Nav = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
     loggedInLinks(currentUser, logout)
    );
  } else {
    return (
      createSessionLinks()
    );
  }
};

// const Nav = ({ currentUser, logout }) => (
//   currentUser ? removeSessionLink(currentUser, logout) : createSessionLinks()
// );

export default Nav;
