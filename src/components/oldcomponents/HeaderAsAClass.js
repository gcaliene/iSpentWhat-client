import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Header.css';
import { protectedEnpointTesting } from '../actions/action';

class Header extends React.Component {
  constructor(props) {
    super();

    console.log(props);
  }

  handleLogout() {
    localStorage.removeItem('token');
    //redirect to homepage using push
  }

  handleProtectedEndpoint() {
    this.props.dispatch(protectedEnpointTesting());
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

        <NavLink exact to="/login" activeClassName="is-active">
          {' '}
          Login{' '}
        </NavLink>
        <button onClick={() => this.handleLogout()}> Logout </button>
        <button onClick={() => this.handleProtectedEndpoint()}>
          TEST PROTECTED ENDPOINT
        </button>
      </header>
    );
  }
}

export default connect()(Header);
