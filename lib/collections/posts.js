import {Mongo} from 'meteor/mongo';

// global.posts = new Mongo.Collection('posts');
// global.comments = new Mongo.Collection('comments');

export const Posts = new Mongo.Collection('posts');
