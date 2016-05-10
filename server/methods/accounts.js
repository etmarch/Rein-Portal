import Collections from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';

Meteor.methods({
  'accounts.sendInvite'( data ) {
    check(data.email, String);
    check(data.firstName, String);
    check(data.lastName, String);
    check(data.companyName, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // Create the account without password
    const userId = Accounts.createUser( {
      username: data.email,
      email: data.email,
      profile: {
        firstName: data.firstName,
        lastName: data.lastName,
        companyName: data.companyName
      }
    });

    if (!userId) {
      throw new Meteor.Error( 'error-creating-user', 'sendInvite Method Error - user not properly created' );
    }
    Roles.addUsersToRoles(userId, ['client']);
  
    // Sends an email asking user to pick a password
    Accounts.sendEnrollmentEmail(userId);

    const inviteData = {
      userId: userId,
      email: data.email,
      dateInvited: new Date(),
      accountCreated: false
    };

    // Create Invitation doc
    Collections.Invitations.insert(inviteData, function(error) {
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
