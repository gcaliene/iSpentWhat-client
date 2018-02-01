import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

import { setTextFilter } from '../../actions/filter';
import {
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filter';

import '../../css/ExpenseFilters.css';

class ExpenseFilters extends React.Component {
  state = {
    calendarFocused: false //the error is coming from having this false
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div id="filter" className="hidden">
        <div className=" expense-filter-wrapper">
          <h1>Filter Options</h1>
          <input
            className="expense-filter-title-label"
            type="text"
            value={this.props.filters.text}
            onChange={e => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
            placeholder="Filter by expense title..."
          />
          <br />
          <br />
          <span className="expense-filter-date-label">
            Select List View
          </span>{' '}
          <br />
          <div className="select-wrapper blue semi-square">
            <select
              value={this.props.filters.sortBy}
              onChange={e => {
                if (e.target.value === 'date') {
                  this.props.dispatch(sortByDate());
                } else if (e.target.value === 'amount') {
                  this.props.dispatch(sortByAmount());
                }
              }}
            >
              <option value="date">Most Recent Expenses First</option>
              <option value="amount">Largest Amounts First</option>
            </select>
          </div>
          <br />
          <span className="expense-filter-date-label">
            Show expenses from a range of dates.
          </span>
          <br />
          <DateRangePicker
            showDefaultInputIcon
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates
            numberOfMonths={1}
            isOutsideRange={() => false}
            readOnly
            reopenPickerOnClearDates
            displayFormat="MMM D"
            customArrowIcon=">"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters // this means that expenseListFilters has acces to filters
  };
};

export default connect(mapStateToProps)(ExpenseFilters);
