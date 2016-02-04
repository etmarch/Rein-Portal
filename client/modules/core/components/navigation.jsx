import React from 'react';

const Navigation = () => (
  <div>
    <b> Navigations: </b>
    <a href="/admin">Admin</a> |
    <a href="/new-post">New Post</a> |
      <a href="/invite/3453645324">New Post</a>
      <b>{Meteor.userId() ? Meteor.user().username : 'Not Logged In' }</b>
  </div>
);

export default Navigation;
