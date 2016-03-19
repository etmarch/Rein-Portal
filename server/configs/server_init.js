import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.startup( function () {

    // Accounts.config( {
    //   forbidClientAccountCreation : true
    // } );

    Accounts.urls.resetPassword = function ( token ) {
      return Meteor.absoluteUrl( 'reset-password/' + token );
    };

    Accounts.urls.enrollAccount = function ( token ) {
      return Meteor.absoluteUrl( 'enrollment/' + token );
    };

  } );

}