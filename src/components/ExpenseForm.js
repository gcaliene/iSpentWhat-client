import React from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
// import $ from 'jquery';

// const date = new Date(); this sucks
const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  //this state is only temporary because it will only be there until user submits form and sends it to redux
  constructor(props) {
    super(props);
    //we have to make sure that the page still works if there is an expense or not
    //thisis why we have to bring in the props
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
    this.setState(() => ({ amount }));
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
        note: this.state.note
      });
      console.log(this);
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            id="description"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            id="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            placeholder="Amount"
          />
          <SingleDatePicker
            id="createdAt"
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            name=""
            id="note"
            value={this.state.note}
            cols="30"
            rows="10"
            placeholder="Add a note for you expense (optional)"
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

//auto

// <DatePicker
//                         selected={this.state.createdAt}
//                         onChange={this.handleChange}
//                         showTimeSelect
//                         dateFormat="LLL"
//                         shouldCloseOnSelect={false}
//                     />
