import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// class Welcome extends Component {
//   render() {
//     return (
//       <div>Hey you made it!</div>
//     );
//   }
// }

const Welcome = () => (
  <div>
    <header className="welcome-heading">
      {/* Welcome, Username */}
      Welcome, <strong>Username</strong>
    </header>
    <section>
      <h3>What would you like to do?</h3>
      <h4>I'd like to see what others are posting</h4>
      <h4><Link to="/new_entry">I&apos;d like write a post</Link></h4>
    </section>
  </div>
);

export default Welcome;
