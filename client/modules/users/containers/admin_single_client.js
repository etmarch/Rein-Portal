import SingleClientA from '../components/admin_single_client.jsx';
import Loading from '../../core/components/loading.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clientId}, onData) => {
  const {Meteor, Collections, Tracker} = context();
  
  Meteor.subscribe('clients.single', clientId, () => {
    const clientData = Meteor.users.findOne(clientId);
    onData(null, {clientData});
  });
  
  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  /* const postFromCache = Tracker.nonreactive(() => {
   return Collections.Reports.findOne(reportId);
   });
   
   if (postFromCache) {
   onData(null, {post: postFromCache});
   } else {
   onData();
   }*/
};

export default composeAll(
    composeWithTracker(composer, Loading),
    useDeps()
)(SingleClientA);


