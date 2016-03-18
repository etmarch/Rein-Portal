import Colls from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'accounts.sendInvite'(_id, email, content) {
    check(_id, String);
    check(email, String);
    check(content, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // Send the token link in email to address provided in form field

    // Accounts.sendEnrollmentEmail ** Maybe can use this function to save time....

    Email.send({
      to: invite.email,
      from: 'Test Admin <etmarch@gmail.com.com>',
      subject: 'Welcome to RGP!',
      html: SSR.render( 'inviteEmail', {
        url: urls[ process.env.NODE_ENV ] + invite.token
      })
    });

    // Colls.Invitations.insert(post);
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
