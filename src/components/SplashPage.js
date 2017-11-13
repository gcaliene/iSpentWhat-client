import React from 'react';

import {connect} from 'react-redux'

class SplashPage extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>This App was created by: {this.props.bananas}</h1>
        <h3>And he is {this.props.poopy} years old.</h3>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  bananas: state.name,
  poopy: state.age
});


export default connect (mapStateToProps)(SplashPage);
