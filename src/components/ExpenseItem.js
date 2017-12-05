import React from 'react';
import { Link } from 'react-router-dom';

///This is the regular unconnected component
const ExpenseItem = ({
  dispatch,
  description,
  id,
  amount,
  createdAt,
  note
}) => (
  <div className="expense-item expense-item-wrapper">
    <Link to={`/edit/${id}`} className="expense-item_description">
      <h3> {description} </h3>
    </Link>
    <div className="expense-item_note-amount-createdat">
      <div>{note}</div>
      <div>
        ${amount / 100} <div>Created at: {createdAt}</div>
      </div>
    </div>
  </div>
);

export default ExpenseItem;
