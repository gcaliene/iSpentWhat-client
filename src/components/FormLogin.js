import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loginUser } from '../actions/action';

class FormLogin extends Component {
  handleSubmit(event) {
    event.preventDefault();
    // console.log('d');
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(this.props);
    this.props.dispatch(loginUser(username, password));
    //after dispatching, user is sent to the dashboard page with all current expenses and the ability to add a new expense
    this.props.history.push('/dashboard');
    // window.location = '/dashboard';
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>Login</button>
      </form>
    );
  }
}

export default connect()(withRouter(FormLogin));
