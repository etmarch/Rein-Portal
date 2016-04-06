import {Mongo} from 'meteor/mongo';

export const Notifications = new Mongo.Collection('Notifications');


// Security for clients
Notifications.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Notifications.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});


Notifications.attachSchema( new SimpleSchema({
  ownerId: {
    type: String,
    label: 'Id of client this notification is attached to',
    optional: true
  },
  isEmail: {
    type: Boolean,
    optional: true
  },
  clientEmail: {
    type: String,
    label: "Email to send Notification to.",
    optional: true
  },
  reportId: { // If attached to report get the Id
    type: String,
    optional: true
  },
  isRead: {
    type: Boolean,
    label: "Invitation token.",
    optional: true
  },
  createdAt: {
    type: Date,
    label: "Time of event",
    optional: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  },
  icon: {
    type: String,
    label: "Has this invitation been accepted by a user?",
    optional: true
  },
  className: {
    type: String,
    optional: true
  },
  title: {
    type: String,
    optional: true
  }

}));
