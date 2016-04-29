// import Colls from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'users.changePassword'(_id, title, content) {
      check(_id, String);

      const updatedAt = new Date();
      const report = {
        _id, title, content, createdAt,
        saving: true
      };
      Meteor.users.update();
    }
  });
}
