import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';

import { fetchBudget } from '../../actions/action';
import { deleteBudget } from '../../actions/action';

import '../../css/BudgetAmount.css';

class BudgetAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: props.expense ? (props.expense.amount / 100).toString() : ''
    };
  }

  componentDidMount() {
    //changed from componentDidMount to componentWillMount
    this.props.dispatch(fetchBudget());
  }

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState(() => ({ error: '' })); //an empty string does not exist, therefore false
    this.props.onSubmit({
      amount: parseFloat(this.state.amount, 10), //we are multiplying by 100 to wrok with pennies
      // createdAt: this.state.createdAt.valueOf(),
      user: this.props.user
    });
  };

  render() {
    let firstTimeBudget;
    if (this.props.budget === '') {
      firstTimeBudget = (
        <form onSubmit={this.onSubmit}>
          <label htmlFor="">
            Include an amount and any expense added will deduct from that
            amount.
          </label>
          <br />
          <input
            id="js-budget-amount-input"
            type="number"
            className="will-be-hidden budget-container_content_amount-input"
            placeholder="Enter a budget here... (optional)"
            value={this.state.amount}
            onChange={this.onAmountChange}
            required
          />
          <button className="budget-button budget-add-button">
            <p>Add Budget</p>
          </button>
        </form>
      );
    } else {
      firstTimeBudget = (
        <div>
          <p>Any expense you now add will deduct from the budget above.</p>
          <button
            className="budget-button budget-delete-button"
            onClick={() => {
              this.props.dispatch(deleteBudget(this.props.match));
              window.location = './dashboard';
            }}
          >
            <p>Delete</p>
          </button>
        </div>
      );
    }

    let budgetMinusExpenses = this.props.budget;

    for (let i = 0; i < this.props.expenses.length; i++) {
      if (this.props.expenses[i].user === this.props.user) {
        console.log(this.props.expenses[i].amount);
        budgetMinusExpenses -= this.props.expenses[i].amount / 100;
      }
    }

    return (
      <div>
        <div className="budget-container">
          <div className="budget-container_content">
            <h3 className="budget-container_content_title">Budget Amount </h3>
            <h1
              id="js-budget-amount-output"
              className="will-be-hidden budget-container_content_amount"
            >
              $ {parseFloat(budgetMinusExpenses).toFixed(2)}
            </h1>
            {firstTimeBudget}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const user = state.user.user;
  const budget = state.budget.budget;
  return {
    user: user,
    budget: budget,
    expenses: state.expenses
  };
};
export default connect(mapStateToProps)(BudgetAmount);
