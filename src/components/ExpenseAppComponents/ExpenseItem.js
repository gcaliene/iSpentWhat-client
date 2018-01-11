import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import '../../css/ExpenseItem.css';

///This is the regular unconnected component
const ExpenseItem = ({
  dispatch,
  description,
  _id,
  amount,
  createdAt,
  note,
  user,
  loggedInUser
}) => {
  if (user === loggedInUser) {
    return (
      <div className="expense-item-list">
        <div className=" expense-item-wrapper">
          <div className="expense-item">
            <Link to={`/edit/${_id}`} className="expense-item_description">
              <h4> {description} </h4>
            </Link>
            <div className="expense-item_note-amount-createdat">
              <div className="">
                <p>
                  <span className="expense-item-amount">$ {amount / 100}</span>
                </p>
                <br />
                <div className="expense-item-note">{note}</div>
                <br />
                <div className="expense-item-date">
                  {moment(createdAt).format('MMM Do, YYYY')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.user.user
  };
};

export default connect(mapStateToProps)(ExpenseItem);
