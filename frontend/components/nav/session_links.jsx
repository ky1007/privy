import React from 'react';
import { Link } from 'react-router-dom';

const createSessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Signup</Link>
  </nav>
);

const removeSessionLink = (currentUser, logout) => (
  <button onClick={logout} className="logout-button">Logout</button>
);

const showSessionLinks = ({ currentUser, logout }) => (
  currentUser ? removeSessionLink(currentUser, logout) : createSessionLinks()
);

export default showSessionLinks;
