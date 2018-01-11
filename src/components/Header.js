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

  handleLoginRegister() {
    $('#FrontPage-FromRegister').removeClass('hidden');
    $('#123').removeClass('hidden');
    $('#header-Register-Login-button').addClass('hidden');
  }
  handleLoginRegisterClose() {
    $('#FrontPage-FromRegister').addClass('hidden');
    $('#123').addClass('hidden');
    $('#header-Register-Login-button').removeClass('hidden');
  }

  //
  // handlePathToAddExpensePage() {
  //   $('#add-expense-button').on('click', function() {
  //     $('#add-expense-button').addClass('hidden');
  //     $('#close-add-expense-component-button').removeClass('hidden');
  //   });
  // }

  // handlePathBackFromAddExpensePage() {
  //   $('#close-add-expense-component-button').on('click', function() {
  //     $('#close-add-expense-component-button').addClass('hidden');
  //     $('#add-expense-button').removeClass('hidden');
  //   });
  // }
  //
  // <button
  //   id="add-expense-button"
  //   className="header-button float-right "
  //   onClick={() => this.handlePathToAddExpensePage()}
  // >
  //   {' '}
  //   <NavLink to="/dashboard/create" activeClassName="is-active">
  //     <i class="fas fa-plus fa-2x" />{' '}
  //   </NavLink>
  // </button>,
  // <button
  //   id="close-add-expense-component-button"
  //   className="header-button float-right hidden"
  //   onClick={() => this.handlePathBackFromAddExpensePage()}
  // >
  //   <NavLink to="/dashboard/" activeClassName="is-active">
  //     <i class="fas fa-times fa-2x" />
  //   </NavLink>
  // </button>,

  renderContent() {
    // const username = this.props.user.toString();
    // console.log(typeof this.props.user);
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
          onClick={() => this.handleLoginRegister()}
        >
          <i className="fas fa-sign-in-alt fa-2x" />
        </button>
      ];
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
