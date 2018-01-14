import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import selectExpenses from "../../reducers/selector";
import { fetchExpenses } from "../../actions/action";

import "../../css/ExpenseList.css";

export class ExpenseList extends React.Component {
	componentDidMount() {
		//changed from componentDidMount to componentWillMount
		this.props.dispatch(fetchExpenses());
	}

	// componentDidUpdate(prevProps, prevState) {
	//   this.props.dispatch(fetchExpenses());
	// }
	//this was below h1         {/* {props.filters.text} */}

	render() {
		return (
			<div>
				<h1 className="expense-list-title">Expense List</h1>
				{this.props.expenses.map(expense => {
					return <ExpenseItem key={expense._id} {...expense} />;
				})}
			</div>
		);
	}
}

/////////this is the function

const mapStateToProps = state => {
	return {
		expenses: selectExpenses(state.expenses, state.filters) //state.expenses,
		// filters: state.filters //now we can use any filters we need in the ExpenseList component
	};
};

///////This is the call to connect to the store
export default connect(mapStateToProps)(ExpenseList);

// //for connected components it is easier to add the word Connected in front, to not get confused
///    Below is not the common way to have it set up. it is just waht is above usually
// const ConnectedExpenseList = connect((state)=> {
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);

// export default ConnectedExpenseList;
