import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Signup</Link>
  </nav>
);

const loggedInGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2>Welcome, {currentUser.username}</h2>
    <button onClick={logout}>Logout</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? loggedInGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
