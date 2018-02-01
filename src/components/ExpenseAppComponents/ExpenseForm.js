import React from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';

import '../../css/ExpenseForm.css';

class ExpenseForm extends React.Component {
  //this state is only temporary because it will only be there until user submits form and sends it to redux
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description })); // or use description:description
  };

  onNoteChange = e => {
    const note = e.target.value; // this const is NEEDED!!!!!!!!!!!!!!!! better than e.persist
    this.setState(() => ({ note })); //going to implivitly return an object
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt })); //this prevents the user from deleting that value
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount' })); //this uses an updater function
    } else {
      this.setState(() => ({ error: '' })); //an empty string does not exist, therefore false
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100, //we are multiplying by 100 to wrok with pennies
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
        user: this.props.user
      });
    }
  };

  render() {
    return (
      <div className="expense-form-wrapper">
        <div className="error_wrapper">
          {' '}
          {this.state.error && <p>{this.state.error}</p>}
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="input-label">Expense</div>
          <input
            className="expense-form-description"
            type="text"
            id="description"
            placeholder="Brief expense title (required)"
            autoFocus
            maxLength="25"
            size="24"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <div className="input-label">Amount (USD)</div>

          <input
            className="expense-form-amount"
            type="text"
            id="amount"
            maxLength="10"
            size="12"
            value={this.state.amount}
            onChange={this.onAmountChange}
            placeholder="Amount (required)"
          />
          <br />
          <div className="input-label">Date</div>
          <SingleDatePicker
            id="createdAt"
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <br />
          <div className="input-label">
            <br />
          </div>
          <textarea
            className="expense-form-note"
            name=""
            id="note"
            value={this.state.note}
            cols="30"
            rows="7"
            placeholder="Add a note for you expense (optional). Max 200 characters."
            maxLength="200"
            onChange={this.onNoteChange}
          />
          <br />
          <button className=" ">
            <div className="add-update-button input-button">
              <p>Add/Update</p>
            </div>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const user = state.user.user;

  return {
    user: user
  };
};

export default connect(mapStateToProps)(ExpenseForm);
