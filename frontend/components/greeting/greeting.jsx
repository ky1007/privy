import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

import SessionFormContainer from '../session_form/session_form_container';
import NavContainer from '../nav/nav_container';

const loggedOutGreeting = () => (
  <div className="behind-bg-image">
    <div className="bg-image">
      <div className="welcome-container">
        <header className="intro">
          <h1>Privy</h1>
          <span className="tagline">
            Journal and reflect on your day, share your day&#39;s experience anonymously. Read about others&#39; experiences.
          </span>
        </header>

        <div className="session-form-container">
          <AuthRoute path="/" component={SessionFormContainer} />
        </div>
      </div>
    </div>
  </div>
);

const loggedInGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2>Welcome, {currentUser.username}</h2>
    <button onClick={logout}>Logout</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? loggedInGreeting(currentUser, logout) : loggedOutGreeting()
);

export default Greeting;
