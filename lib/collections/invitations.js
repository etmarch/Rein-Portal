import {Mongo} from 'meteor/mongo';

// global.posts = new Mongo.Collection('posts');
// global.comments = new Mongo.Collection('comments');

export const Invitations = new Mongo.Collection('Invitations');

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
    userId: {
        type: String,
        label: 'Id of user this invitation is attached to'
    },
    email: {
        type: String,
        label: "Email to send invitation to."
    },
    token: {
        type: String,
        label: "Invitation token.",
        optional: true
    },
    dateInvited: {
        type: String,
        label: "Invitation Date",
        optional: true
    },
    accountCreated: {
        type: Boolean,
        label: "Has this invitation been accepted by a user?",
        optional: true
    },
}));
