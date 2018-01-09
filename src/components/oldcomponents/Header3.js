import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Header.css';
import { protectedEnpointTesting } from '../actions/action';

const Header = props => {
  console.log(this);
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
      <button
        onClick={() => {
          localStorage.removeItem('token');
          console.log(props);
          this.history.push('/');
        }}
      >
        {' '}
        Logout
      </button>
      <button onClick={() => props.dispatch(protectedEnpointTesting())}>
        TEST PROTECTED ENDPOINT
      </button>
    </header>
  );
};

export default connect()(Header);
