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
        <section className="feature-section">
          <div className="feature-container">

            <div className="row">
              <div className="column column-4">
              <i className="fa fa-book fa-5x" aria-hidden="true"></i>
                {/* Quisque vel mollis sem. Fusce nunc ante, vulputate id scelerisque sed, pretium vitae leo. Ut pellentesque, eros a venenatis pretium, urna mi commodo mauris, et fermentum dolor nunc eu orci. Mauris efficitur vel orci non fermentum. Pellentesque consectetur, dolor vel ullamcorper scelerisque, est leo suscipit orci, et ultrices eros nisl a sem. Nunc augue libero, feugiat a odio vitae, iaculis rhoncus libero. Donec eros augue, suscipit nec condimentum eget, elementum in lorem. Proin tempus ornare magna quis mattis. Curabitur at interdum magna, at tincidunt lacus. Integer porttitor vitae libero ac auctor. Duis in enim fermentum, pretium mauris at, porta sapien. Praesent elementum sem massa, sit amet placerat diam posuere gravida. Integer vel scelerisque lorem. Proin lobortis tortor non leo faucibus, ac tincidunt orci molestie. */}
              </div>
              <div className="column column-8 feature">
                <h2>Read</h2>
                <h3>what it's like to be someone else.</h3>
                Discover how other people experience and approach their life from a candid, anonymous perspective. 
              </div>
            </div>

            <div className="row">
              <div className="column column-4">
                <img src="https://i.imgur.com/higmKvN.png" />
                {/* Quisque vel mollis sem. Fusce nunc ante, vulputate id scelerisque sed, pretium vitae leo. Ut pellentesque, eros a venenatis pretium, urna mi commodo mauris, et fermentum dolor nunc eu orci. Mauris efficitur vel orci non fermentum. Pellentesque consectetur, dolor vel ullamcorper scelerisque, est leo suscipit orci, et ultrices eros nisl a sem. Nunc augue libero, feugiat a odio vitae, iaculis rhoncus libero. Donec eros augue, suscipit nec condimentum eget, elementum in lorem. Proin tempus ornare magna quis mattis. Curabitur at interdum magna, at tincidunt lacus. Integer porttitor vitae libero ac auctor. Duis in enim fermentum, pretium mauris at, porta sapien. Praesent elementum sem massa, sit amet placerat diam posuere gravida. Integer vel scelerisque lorem. Proin lobortis tortor non leo faucibus, ac tincidunt orci molestie. */}
              </div>
              <div className="column column-8 feature">
                <h2>Write</h2>
                <h3>and reflect.</h3>
                Take time to figure out what's been happening in your life, where you want to go, and who you want to be.
              </div>
            </div>

            <div className="row">
              <div className="column column-4">
                <img src="https://i.imgur.com/higmKvN.png" />
                {/* Quisque vel mollis sem. Fusce nunc ante, vulputate id scelerisque sed, pretium vitae leo. Ut pellentesque, eros a venenatis pretium, urna mi commodo mauris, et fermentum dolor nunc eu orci. Mauris efficitur vel orci non fermentum. Pellentesque consectetur, dolor vel ullamcorper scelerisque, est leo suscipit orci, et ultrices eros nisl a sem. Nunc augue libero, feugiat a odio vitae, iaculis rhoncus libero. Donec eros augue, suscipit nec condimentum eget, elementum in lorem. Proin tempus ornare magna quis mattis. Curabitur at interdum magna, at tincidunt lacus. Integer porttitor vitae libero ac auctor. Duis in enim fermentum, pretium mauris at, porta sapien. Praesent elementum sem massa, sit amet placerat diam posuere gravida. Integer vel scelerisque lorem. Proin lobortis tortor non leo faucibus, ac tincidunt orci molestie. */}
              </div>
              <div className="column column-8 feature">
                <h2>Follow</h2>
                <h3>interesting people.</h3>
                Keep up with those who inspire you and keep you curious.
              </div>
            </div>

            <div className="row">
              <div className="column column-4">
                <img src="https://i.imgur.com/higmKvN.png" />
                {/* Quisque vel mollis sem. Fusce nunc ante, vulputate id scelerisque sed, pretium vitae leo. Ut pellentesque, eros a venenatis pretium, urna mi commodo mauris, et fermentum dolor nunc eu orci. Mauris efficitur vel orci non fermentum. Pellentesque consectetur, dolor vel ullamcorper scelerisque, est leo suscipit orci, et ultrices eros nisl a sem. Nunc augue libero, feugiat a odio vitae, iaculis rhoncus libero. Donec eros augue, suscipit nec condimentum eget, elementum in lorem. Proin tempus ornare magna quis mattis. Curabitur at interdum magna, at tincidunt lacus. Integer porttitor vitae libero ac auctor. Duis in enim fermentum, pretium mauris at, porta sapien. Praesent elementum sem massa, sit amet placerat diam posuere gravida. Integer vel scelerisque lorem. Proin lobortis tortor non leo faucibus, ac tincidunt orci molestie. */}
              </div>
              <div className="column column-8 feature">
                <h2>Bookmark</h2>
                <h3>what speaks to you.</h3>
                Keep and hold the things you've read that resonates with you.
              </div>
            </div>

            {/* <section className="feature">
              <div className="feature-image">
                <h2>photo goes here</h2>
              </div>
              <div className="feature-description">
                <h2>Read</h2>
                <h3>what it's like to be someone else.</h3>
                Discover how other people experience and approach their life from a candid, anonymous perspective. 
              </div>
            </section>
            <section className="feature">
              <div className="feature-image">
                <h2>photo goes here</h2>
              </div>
              <div className="feature-description">
                <h2>Write</h2>
                <h3>and reflect.</h3>
                Take time to figure out what's been happening in your life, where you want to go, and who you want to be.
              </div>
            </section>
            <section className="feature">
              <div className="feature-image">
                <h2>photo goes here</h2>
              </div>
              <div className="feature-description">
                <h2>Follow</h2>
                <h3>interesting people.</h3>
                Keep up with those who inspire you and keep you curious.
              </div>
            </section>
            <section className="feature">
              <div className="feature-image">
                <h2>photo goes here</h2>
              </div>
              <div className="feature-description">
                <h2>Bookmark</h2>
                <h3>what speaks to you.</h3>
                Keep and hold the things you've read that resonates with you.
                </div>
            </section> */}
          </div>
        </section>
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
