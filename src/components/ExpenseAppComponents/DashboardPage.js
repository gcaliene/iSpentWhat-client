import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseFilters from './ExpenseFilters';
import Header from '../Header';

class DashboardPage extends React.Component {
  componentWillMount() {
    const token = localStorage.getItem('token');
    const tokenType = typeof token;
    console.log(typeof token);
    console.log(tokenType);
    console.log(this.props);
    if (typeof token !== 'string') {
      window.location = '/';
    }
  }
  render() {
    return (
      <div>
        <Header />
        <ExpenseFilters />
        <ExpenseList />
      </div>
    );
  }
}
// implicitly returning so no curlies need
const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(DashboardPage);
