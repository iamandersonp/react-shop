import React from 'react';
import '../styles/RecoveryPassword.scss';

const NotFound = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img
          src="./logos/logo_yard_sale.svg"
          alt="logo"
          className="logo"
        />

        <h1 className="title">Error 404</h1>
        <p className="subtitle">Page not Found!</p>
      </div>
    </div>
  );
};

export default NotFound;
