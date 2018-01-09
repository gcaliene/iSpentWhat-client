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

// import 'react-dates/lib/css/_datepicker.css';

// this worked import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
// import aphroditeInterface from 'react-with-styles-interface-aphrodite';
// import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

// ThemedStyleSheet.registerInterface(aphroditeInterface);
// ThemedStyleSheet.registerTheme(DefaultTheme);

// import 'react-dates/lib/css/_datepicker.css';
// import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
// import aphroditeInterface from 'react-with-styles-interface-aphrodite';
// import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

// ThemedStyleSheet.registerInterface(aphroditeInterface);
// ThemedStyleSheet.registerTheme(DefaultTheme);

class ExpenseFilters extends React.Component {
  state = {
    calendarFocused: false
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
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
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
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
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
    );
  }
}
// //we have the dispatch action props , below commented out was a stateless component but we are going to need
// to manage some props
// const ExpenseListFilters = (props) => (

const mapStateToProps = state => {
  return {
    filters: state.filters // this means that expenseListFilters has acces to filters
  };
};

export default connect(mapStateToProps)(ExpenseFilters);
