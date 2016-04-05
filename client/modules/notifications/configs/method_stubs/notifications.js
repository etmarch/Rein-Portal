import Colls from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'notifications.read'(_id) {
      check(_id, String);

      Colls.Notifications.update({_id: _id}, {isRead: true});
    }
  });
}
