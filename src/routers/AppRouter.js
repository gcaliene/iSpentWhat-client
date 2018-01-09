import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentUser } from '../actions/action';

import FrontPage from '../components/FrontPage';
import DashboardPage from '../components/ExpenseAppComponents/DashboardPage';
import AddExpensePage from '../components/ExpenseAppComponents/AddExpensePage';
import EditExpensePage from '../components/ExpenseAppComponents/EditExpensePage';

class AppRouter extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCurrentUser());
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/dashboard/create" component={AddExpensePage} />
            <Route exact path="/edit/:id" component={EditExpensePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.user.user);
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(AppRouter);
