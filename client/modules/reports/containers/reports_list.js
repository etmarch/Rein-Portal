import ReportsList from '../components/reports_list.jsx';
import Loading from '../../core/components/loading.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscription = Meteor.subscribe('reports.list');

  if (subscription.ready()) {
    const data = {
      ready: true,
      reports: Collections.Reports.find().fetch()
    };
    //console.dir(data);
    onData(null, data);
  } else {
    onData();
  }
};

//const Loading = () => (<div>Hmm…</div>);

export default composeAll(
    composeWithTracker(composer, Loading),
    useDeps()
)(ReportsList);
