import React from 'react';

const User = props => {
  const { auth } = props.user;

  return (
    <div className="user_container">
      <div className="avatar">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className="nfo">
        <div>
          <span>Name:</span> {auth.name}
        </div>
        <div>
          <span>Lastname:</span> {auth.lastname}
        </div>
        <div>
          <span>Email:</span> {auth.email}
        </div>
      </div>
    </div>
  );
};

export default User;
