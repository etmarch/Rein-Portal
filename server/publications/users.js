// import Colls from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('users.list', function () {
    // debugging
    const selector = {};
    const options = {};
    const response = Meteor.users.find(selector, options);
    return response;
});

Meteor.publish('clients.single', function (_id) {
    check(_id, String);
    const selector = {_id};
    const response = Meteor.users.find(selector);
    // console.log ('publish users.single _id', _id);
    // console.log ('publish users.single response', response);
    return response;
});

Meteor.publish('users.current', function (_id) {
    // check(_id, String);
    // if (this.userId) {
    const selector = {_id};
    const response = Meteor.users.find(selector);
    // console.log ('publish users.current _id', _id);
    // console.log ('publish users.current this.userId', this.userId);
    return response;
});

// Publish roles
Meteor.publish(null, function (){
    return Meteor.roles.find({});
});

// Publish Single invite on token page
Meteor.publish( 'invite', function( token ) {
    check( token, String );
    return Colls.Invitations.find( { "token": token } );
});

