import Colls from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';


Meteor.publish('reports.list', function () {
  //console.dir(Colls);
  //Meteor._sleepForMs(1000);
  const selector = {};
  const options = {
    fields: {_id: 1, title: 1},
    sort: {createdAt: -1},
    limit: 10
  };

  console.log(Colls.Reports.find().count());

  return Colls.Reports.find(/*selector, options*/);
});

Meteor.publish('reports.single', function (postId) {
  check(postId, String);
  const selector = {_id: postId};
  return Colls.Reports.find(selector);
});

Meteor.publish('reports.clientList', function (clientId) {
  check(clientId, String);
  const selector = {clientId: clientId};
  return Colls.Reports.find(selector);
});

Meteor.publish('reports.comments', function (postId) {
  check(postId, String);
  const selector = {postId};
  return Colls.Comments.find(selector);
});
