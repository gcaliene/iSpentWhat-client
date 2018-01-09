import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Header.css';
import { protectedEnpointTesting, getCurrentUser } from '../actions/action';

class Header extends React.Component {
  renderContent() {
    console.log(this.props.user);
    switch (this.props.user) {
      case null:
        return; //not show anything to prevent flash
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1"> Hello, {this.props.user} </li>
          // <li key="3" style={{ margin: '0 10px' }}>
          //   Credits: {this.props.auth.credits}
          // </li>,
          // <li key="2">
          //   <a href="/api/logout">Logout</a>
          // </li>
        ];
    }
  }

  componentDidMount() {
    this.props.dispatch(getCurrentUser());
  }

  // componentDidMount() {
  //   this.props.dispatch(getCurrentUser());
  // }

  handleLogout() {
    localStorage.removeItem('token');
    window.location = '/';
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
          {() => this.renderContent()}
        </NavLink>
        <button onClick={() => this.handleLogout()}> Logout </button>
        <button onClick={() => this.renderContent()}>
          TEST PROTECTED ENDPOINT
        </button>
      </header>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.user.user);
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(Header);
