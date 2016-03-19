import Colls from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'accounts.sendInvite'( email ) {
    check(email, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // Create the account without password
    const userId = Accounts.createUser( {
      username: email,
      email: email 
    });

    if (!userId) {
      throw new Meteor.Error( 'error-creating-user', 'sendInvite Method Error - user not properly created' );
    }
    Roles.addUsersToRoles(userId, ['client']);
  
    // Sends an email asking user to pick a password
    Accounts.sendEnrollmentEmail(userId);

    const inviteData = {
      userId: userId,
      email: email,
      dateInvited: new Date(),
      accountCreated: false
    };

    // Create Invitation doc
    Colls.Invitations.insert(inviteData, function(error) {
      if (error)
          throw new Meteor.Error('invite-error', 'Invitation was not created properly '+error);

    });
  },
  'accounts.verifyEmail'(token, userId, verificationId) {
    console.log("SAMPLE VERIFY CODE!");
  }
});

Meteor.methods({
  'accounts.cancelInvite'(_id, postId, text) {
    check(_id, String);
    check(postId, String);
    check(text, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // Cancel the invite by invalidating the token and the users data

    //Colls.Invitations.update(_id, {status: 'cancelled'});
  }
});
