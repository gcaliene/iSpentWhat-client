import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Header.css';
import $ from 'jquery';

// import '../css/container.css';
// import { protectedEnpointTesting, getCurrentUser } from '../actions/action';

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

  renderContent() {
    const username = this.props.user.toString();
    // console.log(typeof this.props.user);
    if (typeof this.props.user !== 'string') {
      return (
        <a href="/">
          <button className="header-button-login float-right">
            <i className="fas fa-sign-in-alt fa-2x" />
          </button>
        </a>
      );
    } else {
      return [
        <button
          className="header-button float-right sign-out-button"
          key="1"
          onClick={() => this.handleLogout()}
        >
          <i className="fas fa-sign-out-alt fa-2x" />
        </button>,
        <button
          id="close-filter-button"
          className="header-button float-right hidden"
          onClick={() => this.handleFilterClose()}
        >
          <i className="fa fa-times fa-2x" aria-hidden="true" />
        </button>,
        <button
          id="filter-button"
          className="header-button float-right filter-button"
          onClick={() => this.handleFilter()}
        >
          <i className="fa fa-filter fa-2x" aria-hidden="true" />
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
  // console.log(state.user.user);
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(Header);
