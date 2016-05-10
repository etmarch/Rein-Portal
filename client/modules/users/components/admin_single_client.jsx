import React from 'react';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';

const SingleClientA = ( data ) => (
    <div className="col-sm-6 col-sm-offset-3">{console.dir( data )}
      <h3>{
        <Avatar>{data.clientData.username.charAt( 0 ).toUpperCase()}</Avatar>
      } {
        data.clientData.profile.firstName
      } {
        data.clientData.profile.lastName
      }</h3>
      <Divider />
    </div>
);

export default SingleClientA;
