import React from 'react';
import {Mongo} from 'meteor/mongo';

// global.posts = new Mongo.Collection('posts');
// global.comments = new Mongo.Collection('comments');

const posts = new Mongo.Collection('posts');

const comments = new Mongo.Collection('comments');

export default {
  Posts: posts,
  Comments: comments
};
