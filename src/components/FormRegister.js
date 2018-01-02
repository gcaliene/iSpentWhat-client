import React from 'react';
import {connect} from 'react-redux'
import {registerUser, loginUserSuccess } from '../actions/action'
import FormLogin from './FormLogin';


class FormRegister extends React.Component {
  componentDidMount(){
    console.log('Registration form ready');
    const authToken = localStorage.getItem('token')
    console.log(authToken);
    this.props.dispatch(loginUserSuccess(authToken))


  }
  handleSubmit(event){
    event.preventDefault();
    // console.log('d');
    const username = event.target.username.value
    const password = event.target.password.value
    console.log(username, password);

    this.props.dispatch(registerUser(username, password))
  }

  handleLogout(props){
    localStorage.removeItem('token')
    //redirect to homepage
  }

  render() {
    return (
      <div className="FormRegister">
        <form onSubmit={(e)=> this.handleSubmit(e)}>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder='password'/>
          <button>Register</button>
        </form>

        <FormLogin />

        <button onClick={()=> this.handleLogout()}> Logout </button>
      </div>
    );
  }
}

export default connect()(FormRegister);
