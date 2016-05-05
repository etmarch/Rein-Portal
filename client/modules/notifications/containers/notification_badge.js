import NotificationBadge from '../components/notification_badge.jsx';
import Loading from '../../core/components/loading.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ( { context }, onData ) => {
  const { Meteor, Collections } = context();
  if ( Meteor.subscribe( 'notifications.dropList' ).ready() ) {
    let selector = { isRead: false };
    const notifications = Collections.Notifications.find(selector).fetch();
    onData( null, { notifications } );
  }
};

/*function composer({context}, onData) {
  const { Meteor, Collections } = context();
  const handle = Meteor.subscribe('notifications.dropList');
  if (handle.ready()) {
    const posts = Collections.Notifications.find().fetch();
    onData(null, {posts});
  } else {
    onData(null, {posts: 10});
  }
};*/

/*export const depsMapper = ( context  ) => ({
  context : () => context
});*/

export default composeAll(
    composeWithTracker(composer, Loading),
    useDeps()
)(NotificationBadge);
