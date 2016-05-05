import React from 'react';
import Badge from '../../../../node_modules/material-ui/lib/badge';
import NotificationsIcon from '../../../../node_modules/material-ui/lib/svg-icons/social/notifications';

class NotificationBadge extends React.Component {
  render() {
    const { notifications } = this.props;
    return (
        <span>
      {console.log( "notifications-badge: "+notifications )}
          {console.log( this.props )}
      <a href="/my-notifications">
      <Badge
          badgeContent={notifications.length}
          primary={true}
      >
        <NotificationsIcon />
      </Badge>
      </a>
  </span>
    );
  }
}
export default NotificationBadge;

