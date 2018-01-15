import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavDropdown = ({display}, {logout}, {currentUser}) => (
  <div className={`${display}`}>
    <ul>
      <li>HA</li>
      <li><NavLink to="/everyone" activeClassName="nav-active-link">Everyone&apos;s Diary</NavLink></li>
      <li><NavLink to="/" onClick={logout}>Logout, </NavLink></li>
    </ul>
  </div>
);

export default NavDropdown;
