import React from 'react';
import { connect } from 'react-redux';
import { registerUser, loginUserSuccess } from '../actions/action';
import FormLogin from './FormLogin';

import '../css/FormRegister.css';
import '../css/container.css';

class FormRegister extends React.Component {
  componentDidMount() {
    // console.log('Registration form ready');
    const authToken = localStorage.getItem('token');
    // console.log(authToken);
    this.props.dispatch(loginUserSuccess(authToken));
  }
  handleSubmit(event) {
    event.preventDefault();
    // console.log('d');
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(username, password);
    this.props.dispatch(registerUser(username, password));
  }

  render() {
    return (
      <div className="container">
        <div className="FormRegister-container">
          <div className="FormRegister-container-border">
            <form
              onSubmit={e => this.handleSubmit(e)}
              className="FormRegister-container-form"
            >
              <input
                type="text"
                name="username"
                placeholder="username"
                required
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="password"
                required
              />
              <br /> <br />
              <button>Register</button>
            </form>
            <br />
            <br />

            <FormLogin />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(FormRegister);
