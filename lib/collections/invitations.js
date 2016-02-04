import {Mongo} from 'meteor/mongo';

// global.posts = new Mongo.Collection('posts');
// global.comments = new Mongo.Collection('comments');

export const Invitations = new Mongo.Collection('invitations');

// Security for clients
Invitations.allow({
    insert: () => false,
    update: () => false,
    remove: () => false
});

Invitations.deny({
    insert: () => true,
    update: () => true,
    remove: () => true
});



Invitations.attachSchema( new SimpleSchema({
    email: {
        type: String,
        label: "Email to send invitation to."
    },
    token: {
        type: String,
        label: "Invitation token."
    },
    role: {
        type: String,
        label: "Role to apply to the user."
    },
    date: {
        type: String,
        label: "Invitation Date"
    }
}));
