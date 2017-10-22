import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const createSessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Signup</Link>
  </nav>
);

const loggedInLinks = (currentUser, logout) => (
  <div className="nav-flow">
    <nav className="main-container">
      <header className="nav-logo"><Link to="/welcome">Privy</Link></header>
      <section className="nav-links">
          <li><NavLink to="/everyone" activeClassName="nav-active-link">Everyone&apos;s Diary</NavLink></li>
          <li><NavLink to={`/${currentUser.username}/entries`} activeClassName="nav-active-link">Your Diary</NavLink></li>
          <li><NavLink to="/feed" activeClassName="nav-active-link">Your Feed</NavLink></li>
          <li><NavLink to="/bookmarks" activeClassName="nav-active-link">Your Bookmarks</NavLink></li>
          <li><NavLink to="/new_entry" activeClassName="nav-active-link">New Entry</NavLink></li>
          <li><NavLink to="/" onClick={logout} className="logout-button">
                Logout, {currentUser.username}
              </NavLink>
          </li>
      </section>
    </nav>
  </div>

);

const Nav = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
     loggedInLinks(currentUser, logout)
    );
  }
  return (
    createSessionLinks()
  );
};

// const Nav = ({ currentUser, logout }) => (
//   currentUser ? removeSessionLink(currentUser, logout) : createSessionLinks()
// );

export default Nav;
