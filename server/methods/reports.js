import {Reports} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods( {
  'reports.create'( _id, title, content ) {
    check( _id, String );
    check( title, String );
    check( content, String );

    // Show the latency compensations
    Meteor._sleepForMs( 500 );

    // XXX: Do some user authorization
    const createdAt = new Date();
    const report = { _id, title, content, createdAt };
    Reports.insert( report, ( err, res ) => {
          if (err) {
            console.log("Error: "+err+' '+res+'!');
          } else {
            Colls.Notifications.insert({
              title: 'New Report - Uploaded at '+report.createdAt,
              ownerId: report.clientId,
              reportId: report._id,
              isRead: false,
              className: 'centered'
            })
          }
        }
    );
  }
} );

Meteor.methods( {
  'reports.edit'( _id, postId, text ) {
    check( _id, String );
    check( postId, String );
    check( text, String );

    // Show the latency compensations
    Meteor._sleepForMs( 500 );

    // XXX: Do some user authorization
    const createdAt = new Date();
    const author = 'The User';
    const comment = { _id, postId, author, text, createdAt };
    Colls.Comments.insert( comment );
  }
} );
