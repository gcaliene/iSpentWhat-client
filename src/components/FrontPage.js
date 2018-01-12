import React from 'react';
import $ from 'jquery';

import FormRegister from './FormRegister';
import Header from './Header';
import { Footer } from './FrontPageFooter';
import '../css/container.css';
import '../css/FrontPage.css';

class FrontPage extends React.Component {
  componentWillMount() {
    const authToken = localStorage.getItem('token');
    if (typeof authToken === 'string') {
      window.location = '/dashboard';
    }
  }

  handleLoginRegister() {
    $('#id-front-page-register-login-button').addClass('hidden');
    $('#FrontPage-FromRegister').removeClass('hidden');
    $('#123').removeClass('hidden');
    $('#header-Register-Login-button').addClass('hidden');
  }

  render() {
    return (
      <div className="FrontPage-container ">
        <Header />
        <div className="front-page-content container">
          <div className="front-page-content-text">
            <p>
              A quick and simple way to manage your spending when you really
              don't want to.
            </p>
            <div className="icon-container">
              <span className="icon">
                <i className="far fa-gem" />
              </span>
              <span className="icon">
                <i className="fab fa-bitcoin" />
              </span>
              <span className="icon">
                <i className="far fa-money-bill-alt" />
              </span>
              <span className="icon">
                <i className="far fa-credit-card" />
              </span>
            </div>
            <div className="front-page-registration-login-container">
              <button
                id="id-front-page-register-login-button"
                className="front-page-registration-login-button"
                onClick={() => this.handleLoginRegister()}
              >
                Register/Login
              </button>
            </div>
          </div>
          <br />
          <div
            id="FrontPage-FromRegister"
            className="hidden front-page-FormRegister"
          >
            <FormRegister />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FrontPage;
