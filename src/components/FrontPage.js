import React from 'react';
import FormRegister from './FormRegister';
import Header from './Header';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <div>
          <p>
            Just some random text where most of the design would go to and the
            about section would go?
          </p>
        </div>
        <FormRegister />
      </div>
    );
  }
}

export default FrontPage;
