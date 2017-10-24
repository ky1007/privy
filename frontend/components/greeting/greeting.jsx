import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

import SessionFormContainer from '../session_form/session_form_container';

const loggedOutGreeting = () => (
  <div>
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
        <section className="welcome-container">
          <section className="feature">
            <h2>Read</h2>
            <h3>what it's like to be someone else.</h3>
            Discover how other people experience and approach their life. 
          </section>
          <section className="feature">
            <h2>Write</h2>
            <h3>and reflect.</h3>
            Take time to figure out what's been happening in your life and where you want to go.
          </section>
          <section className="feature">
            <h2>Follow</h2>
            <h3>interesting people.</h3>
            Keep up with those who inspire you and keep you curious.
          </section>
          <section className="feature">
            <h2>Bookmark</h2>
            <h3>what speaks to you.</h3>
            Keep and hold the things you've read that resonates with you.
          </section>
        </section>
      </div>
    </div>
    {/* <div className="main-container">
      Heyhey
    </div> */}
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
