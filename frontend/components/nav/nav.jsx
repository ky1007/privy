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
  <nav>
    <header className="nav-logo"><Link to="/everyone">Privy</Link></header>
    <section className="nav-links">
        <li><Link to="/everyone">Everyone's Diary</Link></li>
        <li><Link to="/feed">Your Feed</Link></li>
        <li><Link to="/new_entry">New Entry</Link></li>
        <li><Link to="/" onClick={logout} className="logout-button">Logout</Link></li>
    </section>
  </nav>
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
