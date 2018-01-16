import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Header.css';
import $ from 'jquery';

class Header extends React.Component {
  componentDidMount() {
    this.renderContent();
  }

  componentWillUpdate() {
    this.renderContent();
  }

  handleLogout() {
    localStorage.removeItem('token');
    window.location = '/';
  }

  handleFilter() {
    $('#filter-button').on('click', function() {
      $('#filter').removeClass('hidden');
      $('#filter-button').addClass('hidden');
      $('#close-filter-button').removeClass('hidden');
    });
  }

  handleFilterClose() {
    $('#close-filter-button').on('click', function() {
      $('#filter').addClass('hidden');
      $('#filter-button').removeClass('hidden');
      $('#close-filter-button').addClass('hidden');
    });
  }

  handleLogin() {
    $('#id-front-page-register-login-button').addClass('hidden');
    $('#FrontPage-FromLogin').removeClass('hidden');
    $('#123').removeClass('hidden');
    $('#header-Register-Login-button').addClass('hidden');
    $('#id-form-login-input-username').focus();
    window.scrollTo(0, 1000);
  }
  handleLoginRegisterClose() {
    $('#id-front-page-register-login-button').removeClass('hidden');
    $('#FrontPage-FromLogin').addClass('hidden');
    $('#FrontPage-FromRegister').addClass('hidden');
    $('#123').addClass('hidden');
    $('#header-Register-Login-button').removeClass('hidden');
  }

  renderContent() {
    if (typeof this.props.user !== 'string') {
      return [
        <button
          id="123"
          key="123"
          className="header-button-login float-right hidden "
          onClick={() => this.handleLoginRegisterClose()}
        >
          <i className="fa fa-times fa-2x" aria-hidden="true" />
        </button>,
        <button
          key="234"
          id="header-Register-Login-button"
          className="header-button-login float-right"
          onClick={() => this.handleLogin()}
        >
          <i className="fas fa-sign-in-alt fa-2x">
            <span className="header-button-text"> Login</span>
          </i>
        </button>
      ];
    } else {
      return [
        <button
          className="header-button float-right sign-out-button"
          key="1"
          onClick={() => this.handleLogout()}
        >
          <i className="fas fa-sign-out-alt fa-2x">
            <span className="header-button-text">Logout</span>
          </i>
        </button>,

        <button
          key="235"
          id="close-filter-button"
          className="header-button float-right hidden"
          onClick={() => this.handleFilterClose()}
        >
          <i className="fa fa-times fa-2x" aria-hidden="true" />
        </button>,

        <button
          key="236"
          id="filter-button"
          className="header-button float-right filter-button"
          onClick={() => this.handleFilter()}
        >
          <span>{'    '}</span>
          <span>{'    '}</span>
          <i className="fa fa-filter fa-2x" aria-hidden="true">
            <span className="header-button-text">Filter</span>
          </i>
        </button>
      ];
    }
  }

  render() {
    return (
      <div className="main-header ">
        <header>
          <div className="container">
            <NavLink exact to="/dashboard" className="header-logo float-left">
              <h1 className="is-active-logo">iSpentWhat</h1>
            </NavLink>
            <div className="main-header-buttons">
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
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(Header);
