import Colls from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'posts.create'(_id, title, content) {
    check(_id, String);
    check(title, String);
    check(content, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // XXX: Do some user authorization
    const createdAt = new Date();
    const post = {_id, title, content, createdAt};
    Colls.Posts.insert(post);
  }
});

Meteor.methods({
  'posts.createComment'(_id, postId, text) {
    check(_id, String);
    check(postId, String);
    check(text, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // XXX: Do some user authorization
    const createdAt = new Date();
    const author = 'The User';
    const comment = {_id, postId, author, text, createdAt};
    Colls.Comments.insert(comment);
  }
});
