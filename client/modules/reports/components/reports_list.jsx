import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

const ReportsList = (data) => (

    <div>
      <h3>List of Reports ({data.reports.length})</h3>
      <List>
        {data.reports.map( report => {
          return (<ListItem key={report._id} primaryText={report.title} />)
        }  )}
      </List>
    </div>
);

export default ReportsList;
