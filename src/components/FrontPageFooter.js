import React from 'react';

import '../css/Footer.css';

export const Footer = () => (
  <div
    className="footer footer-front-page"
    onClick={() => window.scrollTo(0, 0)}
  >
    <p>&copy; 2018</p>
  </div>
);
