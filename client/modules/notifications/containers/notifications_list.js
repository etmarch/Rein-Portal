import NotificationsList from '../components/notifications_list.jsx';
import Loading from '../../core/components/loading.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ( { context }, onData ) => {
  const { Meteor, Collections } = context();
  if ( Meteor.subscribe( 'notifications.pageList' ).ready() ) {
    const notifications = Collections.Notifications.find().fetch();
    onData( null, { notifications } );
  }
};

export const depsMapper = ( context, actions ) => ({
  read    : actions.notifications.read,
  context : () => context
});

export default composeAll(
    composeWithTracker( composer, Loading ),
    useDeps( depsMapper )
)( NotificationsList );

