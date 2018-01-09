import React from 'react';

import {connect} from 'react-redux'

class SplashPage extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.bananas}</h1>
        <h3>At {this.props.poopy}, I spent {this.props.cashMoney} pennies. </h3>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  bananas: state[0].description,
  poopy: state[0].createdAt,
  cashMoney: state[0].amount,
});


export default connect (mapStateToProps)(SplashPage);
