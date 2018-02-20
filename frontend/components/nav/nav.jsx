import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from './nav_dropdown';

const createSessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Signup</Link>
  </nav>
);

class LoggedInLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
    };
    this.menuVisibilityToggle = this.menuVisibilityToggle.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e) {
    if (e.target !== document.getElementsByClassName('fa-bars')[0]) {
      this.setState({ showNav: false });
      window.removeEventListener('click', this.handleMenuClick);
    }
  }

  menuVisibilityToggle(e) {
    e.preventDefault();
    
    if (!this.state.showNav) {
      window.addEventListener('click', this.handleMenuClick);
    } 
    this.setState({ showNav: !this.state.showNav }, );
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleMenuClick);
  }

  render() {
    return (
      <div className="nav-flow">
      <nav className="main-container">
        <header className="nav-logo"><Link to="/welcome">Privy</Link></header>
        <section className={this.state.showNav ? 'nav-links' : 'invisible' }>
          {/* <div className="pointer"></div> */}
          <li><NavLink to="/everyone" activeClassName="nav-active-link">Everyone&apos;s Diary</NavLink></li>
          <li><NavLink to={`/${this.props.currentUser.username}/entries`} activeClassName="nav-active-link">Your Diary</NavLink></li>
          <li><NavLink to="/feed" activeClassName="nav-active-link">Your Feed</NavLink></li>
          <li><NavLink to="/bookmarks" activeClassName="nav-active-link">Your Bookmarks</NavLink></li>
          <li><NavLink to="/new_entry" activeClassName="nav-active-link">New Entry</NavLink></li>
          {/* <li><NavLink to="/" onClick={this.props.logout} className="logout-button"> */}
          <li><NavLink to="/" onClick={this.props.logout}>
                Logout, {this.props.currentUser.username}
              </NavLink>
          </li>
        </section>
        <li onClick={this.menuVisibilityToggle}><i className={this.state.showNav ? 'fa fa-bars fa-2x lighten' : 'fa fa-bars fa-2x'} /></li>
        {/* <li onClick={this.menuVisibilityToggle}><i className="fa fa-bars fa-2x" /></li> */}
        {/* <li onClick={this.menuVisibilityToggle}><i className="fa fa-user-circle fa-2x" /></li> */}
        {/* <NavDropdown display={`${toggle} nav-pop`} logout={logout} currentUser={currentUser}/> */}
      </nav>
    </div>
    );
  }
}


const Nav = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
     <LoggedInLinks currentUser={currentUser}
                    logout={logout} />
    );
  }
  return (
    createSessionLinks()
  );
};

export default Nav;
