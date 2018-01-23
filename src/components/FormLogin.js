import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

import { loginUser } from '../actions/action';
import '../css/FormRegister.css';
import '../css/FormLogin.css';

class FormLogin extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    this.props.dispatch(loginUser(username, password));
  }

  handleLinkToRegister() {
    $('#id-front-page-register-login-button').addClass('hidden');
    $('#FrontPage-FromRegister').removeClass('hidden');
    $('#FrontPage-FromLogin').addClass('hidden');
    $('#123').removeClass('hidden');
    $('#header-Register-Login-button').addClass('hidden');
    $('#js-demo-user-container').addClass('hidden');
    $('#js-login-button-demo').removeClass('hidden');

    $('#input-registration-username').focus();
  }

  handleLinkToUseDemoAccountFromLogin() {
    $('#js-demo-user-container').removeClass('hidden');
    $('#js-login-button-demo').addClass('hidden');
  }

  render() {
    return (
      <div className="container">
        <div className="FormLogin-container">
          <div className="FormLogin-container-border">
            <p className="login-form-title">Login</p>
            <div id="js-demo-user-container" class="demo-user-container hidden">
              <h3 class="demo-user-title">Demo user</h3>
              <p>Username: test123</p>
              <p>Password: 1234567890</p>
            </div>
            <form
              onSubmit={e => this.handleSubmit(e)}
              className="FormRegister-container-form"
            >
              <br />
              <p
                id="error-username-login"
                className=" class-success-username-login hidden"
              />{' '}
              <br />
              <input
                id="id-form-login-input-username"
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <br />
              <input
                id="id-form-login-input-password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <br /> <br />
              <button>Login</button>
              <p
                id=""
                className="register-form-signin-link"
                onClick={() => this.handleLinkToRegister()}
              >
                New User? Click here.
              </p>
              <p
                id="js-login-button-demo"
                onClick={() => this.handleLinkToUseDemoAccountFromLogin()}
                className="register-form-signin-link"
              >
                Want to demo the app? Click here.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(FormLogin));
