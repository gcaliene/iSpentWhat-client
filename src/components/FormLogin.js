import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loginUser } from '../actions/action'

class FormLogin extends Component{

  handleSubmit(event){
    event.preventDefault();
    // console.log('d');
    const username = event.target.username.value
    const password = event.target.password.value
    console.log(username, password);

    this.props.dispatch(loginUser(username, password))
  }
  render() {
    return(
      <form onSubmit={(e)=> this.handleSubmit(e)}>
        <input type="text" name="username"/>
        <input type="password" name="password"/>
        <button>Login</button>
      </form>
    )
  }
}


export default connect ()(FormLogin)
