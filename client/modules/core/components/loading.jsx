import React from 'react';

var Spinner = require('react-spin');

const spinCfg = {
    width: 6,
    radius: 17,
    speed: 1.6,
    length: 23,
    top: '40%',
    color: '#000',
    //shadow: true, // Whether to render a shadow
    hwaccel: true // Whether to use hardware acceleration
};

const Loading = () => (
  <div style={{'textAlign': 'center', 'minHeight': 400}}>
      <Spinner config={spinCfg} />
  </div>
);

export default Loading;
