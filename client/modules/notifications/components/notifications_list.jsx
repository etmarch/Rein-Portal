import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

class NotificationsList extends React.Component {
  render() {
    console.log('this props: '+JSON.stringify(this.props));
    const {notifications} = this.props;
    return (

        <div className='notification-list'>
          <List>
            {notifications.map( note => (
                <ListItem key={note._id}>
                  <a href='#' class={note.class}>{note.title}</a>
                </ListItem>
            ) )}
          </List>
        </div>
    );
  }

  read() { //ToDo: Attach the read function to a MUI hover event or something
    const {read} = this.props;
    const {notificationId} = this.refs;
    read(notificationId);
  }
}

export default NotificationsList;
