import {Mongo} from 'meteor/mongo';

// global.posts = new Mongo.Collection('posts');
// global.comments = new Mongo.Collection('comments');

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
  isRead: {
    type: Boolean,
    label: "Invitation token.",
    optional: true
  },
  createdAt: {
    type: String,
    label: "Time of event",
    optional: true
  },
  icon: {
    type: String,
    label: "Has this invitation been accepted by a user?",
    optional: true
  },
  class: {
    type: String,
    optional: true
  },
  title: {
    type: String,
    optional: true
  }
}));
