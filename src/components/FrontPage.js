import React from 'react';
import FormRegister from './FormRegister';
import Header from './Header';
import { Footer } from './Footer';
import '../css/container.css';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="FrontPage-container ">
        <Header />
        <div className="front-page-content container">
          <div className="front-page-content-text">
            <p>
              Just some random text where most of the design would go to and the
              about section would go?
            </p>
          </div>
          <FormRegister />
        </div>
        <Footer />
      </div>
    );
  }
}

export default FrontPage;
