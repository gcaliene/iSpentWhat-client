import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Header.css';
// import { protectedEnpointTesting, getCurrentUser } from '../actions/action';

class Header extends React.Component {
  componentDidMount() {
    this.renderContent();
  }

  componentWillUpdate() {
    this.renderContent();
  }

  renderContent() {
    const username = this.props.user.toString();
    // console.log(typeof this.props.user);
    if (typeof this.props.user !== 'string') {
      return (
        <li>
          <a href="/">Login</a>
        </li>
      );
    } else {
      return [
        // console.log(username),
        <button key="1" onClick={() => this.handleLogout()}>
          {' '}
          Logout{' '}
        </button>,
        <div key="2" style={{ color: 'white' }}>
          Welcome {username}
        </div>
      ];
    }
  }

  handleLogout() {
    localStorage.removeItem('token');
    window.location = '/';
  }

  render() {
    return (
      <header className="main-header">
        <NavLink exact to="/" className="header-logo">
          <h1 className="is-active-logo">iSpentWhat</h1>
        </NavLink>
        <NavLink exact to="/dashboard" activeClassName="is-active">
          Dashboard{' '}
        </NavLink>
        <NavLink to="/dashboard/create" activeClassName="is-active">
          Add expense{' '}
        </NavLink>

        <div className="main-header-username">{this.renderContent()}</div>

        <button onClick={() => this.renderContent()} />
      </header>
    );
  }
}
//
const mapStateToProps = state => {
  // console.log(state.user.user);
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(Header);
