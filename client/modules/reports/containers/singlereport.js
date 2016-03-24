/*
import SingleReport from '../components/single_report.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, reportId}, onData) => {
  const {Meteor, Collections, Tracker} = context();

  Meteor.subscribe('reports.single', reportId, () => {
    const post = Collections.Reports.findOne(reportId);
    onData(null, {post});
  });

  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  const postFromCache = Tracker.nonreactive(() => {
    return Collections.Reports.findOne(reportId);
  });

  if (postFromCache) {
    onData(null, {post: postFromCache});
  } else {
    onData();
  }
};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(SingleReport);
*/
