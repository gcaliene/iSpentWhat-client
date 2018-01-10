import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

///This is the regular unconnected component
class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  getCurrentUser() {}

  render() {
    console.log(this);
    return (
      <div className="expense-item expense-item-wrapper">
        <Link
          to={`/edit/${this.props._id}`}
          className="expense-item_description"
        >
          <h3> {this.props.description} </h3>
        </Link>
        <div className="expense-item_note-amount-createdat">
          <div>{this.props.note}</div>
          <div>
            ${this.props.amount / 100}{' '}
            <div>Created at: {this.props.createdAt}</div>
            <div>_id #: {this.props.user}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.user.user);
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(ExpenseItem);
