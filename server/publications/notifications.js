import Colls from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';



Meteor.publish('notifications.pageList', function () {
  //Meteor._sleepForMs(500);
  const selector = {
    ownerId: this.userId
  };
  const options = {
    fields: {_id: 1, title: 1, className: 1, isRead: 1, createdAt: 1},
    sort: {createdAt: -1}
  };
  
  return Colls.Notifications.find(selector, options);
});

Meteor.publish('notifications.dropList', function () {
  const selector = {
    ownerId: this.userId,
    isRead: false
  };
  const options = {
    //fields: {_id: 1, title: 1, isRead: 1, className: 1, createdAt: 1},
    sort: {createdAt: -1},
    limit: 5
  };

  return Colls.Notifications.find(selector, options);
});
