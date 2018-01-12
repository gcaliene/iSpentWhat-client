import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ExpenseList from './ExpenseList';
import ExpenseFilters from './ExpenseFilters';
import Header from '../Header';
import { Footer } from '../Footer';

import '../../css/dashboard.css';
import '../../css/Footer.css';

class DashboardPage extends React.Component {
  componentWillMount() {
    const token = localStorage.getItem('token');
    if (typeof token !== 'string') {
      window.location = '/';
    }
  }
  render() {
    return (
      <div>
        <div className=" dashboard">
          <Header />
          <div className="container">
            <ExpenseFilters />
            <ExpenseList />
          </div>
          <NavLink to="/dashboard/create" activeClassName="is-active">
            <i className="fas fa-plus fa-5x plus-circle" />
          </NavLink>
        </div>
        <Footer />
      </div>
    );
  }
}
// implicitly returning so no curlies need
const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(DashboardPage);
