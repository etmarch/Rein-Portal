import Colls from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'notifications.read'( _id ) { // notification id
    console.log('Read '+_id+' Notification!');

    // Create Invitation doc
    Colls.Notifications.update({_id: _id}, {isRead: true}, function(error) {
      if (error)
        throw new Meteor.Error('invite-error', 'Invitation was not created properly '+error);

    });
  },
  'notifications.readAll'() {
    console.log("Read all Notifications!");
  }
});

