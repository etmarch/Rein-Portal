import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';

const AdminClientsList = (data) => (
    <div>{console.dir(data)}
      <h3>List of Clients ({data.clients.length})</h3>
      <List>
        {data.clients.map( client => {
          return (<a href={`/admin/clients/${client._id}`} key={client._id}>
            <ListItem primaryText={client.username} leftAvatar={<Avatar>{client.username.charAt(0).toUpperCase()}</Avatar>} />
            <Divider />
          </a>)
        }  )}
      </List>
    </div>
);

export default AdminClientsList;
