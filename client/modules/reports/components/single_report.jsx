import React from 'react';

const SingleReport = (data) => (
    <div>{console.dir(data)}
      <h3>{data.report.title}</h3>
    </div>
);

export default SingleReport;
