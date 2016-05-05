import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

const ReportsList = (data) => (

    <div>
      <h3>List of Reports ({data.reports.length})</h3>
      <List>
        {data.reports.map( report => {
          return (<a href={`/admin/reports/${report._id}`} key={report._id}><ListItem primaryText={report.title} /><Divider /></a>)
        }  )}
      </List>
    </div>
);

export default ReportsList;
