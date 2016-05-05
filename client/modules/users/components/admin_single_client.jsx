import React from 'react';

const SingleClientA = (data) => (
    <div>{console.dir(data)}
      <h3>{data.clientData.username}</h3>
    </div>
);

export default SingleClientA;
