import React from 'react';
import axios from 'axios';

const Logout = props => {
  const response = axios.get(`/api/logout`).then(res => {
    setTimeout(() => {
      props.history.push('/');
    }, 2000);
  });

  return (
    <div className="logout_container">
      <h1>See you soon...</h1>
    </div>
  );
};

export default Logout;
