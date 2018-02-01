import React from 'react';
import $ from 'jquery';

import Header from './Header';
import FormRegister from './FormRegister';
import FormLogin from './FormLogin';
import { Footer } from './FrontPageFooter';

import '../css/container.css';
import '../css/FrontPage.css';
import '../css/FrontPageSection.css';

class FrontPage extends React.Component {
  componentWillMount() {
    const authToken = localStorage.getItem('token');
    if (typeof authToken === 'string') {
      window.location = '/dashboard';
    }
  }

  handleRegister() {
    $('#js-front-page-content').removeClass('front-page-content');
    $('#js-front-page-content').addClass('front-page-content-open-form');

    $('#id-front-page-register-login-button').addClass('hidden');
    $('#FrontPage-FromRegister').removeClass('hidden');
    $('#123').removeClass('hidden');
    $('#header-Register-Login-button').addClass('hidden');
    window.scrollTo(0, 310);
    $('#input-registration-username').focus();
  }

  render() {
    return (
      <div className="FrontPage-container">
        <Header />
        <div className="opacity-layer" />
        <div className="img-layer" />

        <div id="js-front-page-content" className="front-page-content">
          <div className="front-page-content-text container">
            <p>
              A quick and simple way to manage your spending when you really
              don't want to.
            </p>
            <div className="icon-container">
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
                onClick={() => this.handleRegister()}
              >
                Register
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
          <div id="FrontPage-FromLogin" className="hidden front-page-FormLogin">
            <FormLogin />
          </div>
        </div>
        <div className="section section_1 flexcontainer">
          <div className="half left-half budgeting">
            <h1 className="budgeting_title">
              Set Your <br /> Budget
            </h1>
            <p>
              Going out for one night? <br /> Set a budget and <br /> all your
              expenses will update <br /> the remaining amount.
            </p>
          </div>
          <div className=" half right-half budgeting_picture">hola</div>
        </div>
        <div className="section section_2 flexcontainer-reverse-wrap ">
          <div className="half left-half tracking_picture">hola2</div>
          <div className=" half right-half tracking">
            <h1 className="budgeting_title">
              Track Your<br /> Spending
            </h1>
            <p>
              Easily add and edit <br />all your expenses and watch <br />as it
              deducts from <br />your set budget.{' '}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FrontPage;
