import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div>
            <div className="not-found-page">
      <h1 className="not-found-heading">404 Error</h1>
      <p className="not-found-message">Sorry, the page you are looking for could not be found.</p>
    </div>
        </div>
    );
};

export default Error;