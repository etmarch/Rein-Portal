import React from 'react';
import {Mongo} from 'meteor/mongo';

global.posts = new Mongo.Collection('posts');
global.comments = new Mongo.Collection('comments');
console.dir('testing from collections ', (global.posts).length);

export default {
  Posts: global.posts,
  Comments: global.comments
};
