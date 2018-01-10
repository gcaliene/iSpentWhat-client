import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Header.css';
// import '../css/container.css';
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
      <div className="main-header ">
        <header>
          <div className="container">
            <NavLink exact to="/dashboard" className="header-logo float-left">
              <h1 className="is-active-logo">iSpentWhat</h1>
            </NavLink>
            <div className="float-right">
              <NavLink to="/dashboard/create" activeClassName="is-active">
                Add expense{' '}
              </NavLink>
              <span className="main-header-username">
                {this.renderContent()}
              </span>
            </div>
          </div>
        </header>
      </div>
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
