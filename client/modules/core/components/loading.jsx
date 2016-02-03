import React from 'react';

import CircularProgress from 'material-ui/lib/circular-progress';

var Spinner = require('react-spin');

const spinCfg = {
    width: 6,
    radius: 17,
    speed: 1.6,
    length: 23,
    color: '#000'
};

const Loading = () => (
  <div style={{'textAlign': 'center'}}>
      <Spinner config={spinCfg} />
  </div>
);

export default Loading;
