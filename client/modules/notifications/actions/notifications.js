export default {
  read({Meteor, LocalState}, notificationId) {
    if (!notificationId) {
      LocalState.set('INTERNAL_NOTIFICATION_CREATION_ERROR', 'notification Id is required.');
      return;
    }

    Meteor.call('notifications.read', notificationId, (err) => {
      if (err) {
        alert(`Notification creating failed: ${err.message}`);
      }
    });

  }


};
