import React from 'react';
import { Link } from 'react-router-dom'



///This is the regular unconnected component
const ExpenseItem = ({ dispatch, description, id, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3> { description } </h3>
        </Link>
        <p>{ amount } - {createdAt} </p>
    </div>    
);



export default ExpenseItem;
