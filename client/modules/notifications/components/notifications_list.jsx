import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

class NotificationsList extends React.Component {
  render() {
    //console.log( 'this props: ' + JSON.stringify( this.props ) );
    const { notifications } = this.props;
    return (

        <div className='notification-list centered'>
          {notifications.length === 0 ? <h3>No Notifications to show!</h3>

              :

              <List>
                {notifications.map( ( item) => {
                  return this._renderItems(item);

                  /*
                   * ANOTHER WAY TO ACCOMPLISH ABOVE W/O SEPERATE FUNCTION
                   * <ListItem key={item._id} onTouchTap={ e => this.read(e, item._id)} primaryText={item.title}/>*/
                } )}
              </List>
          }
        </div>
    );
  }

  read( event, notificationId ) {
    console.log( typeof notificationId );
    const { read } = this.props;
    read( notificationId );
  }

  _renderItems( item ) {
    return <span key={item._id}>
      <ListItem onTouchTap={this.read.bind( this, event, item._id )}
                     primaryText={item.title}
                     className={item.isRead === true ? 'notify-read' : 'notify-unread'}  />
      <Divider />
      </span>
  }
}

export default NotificationsList;
