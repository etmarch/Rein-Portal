/*import ReportsList from '../components/reports_list.jsx';
import Loading from '../../core/components/loading.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('reports.list').ready()) {
    const reports = Collections.Reports.find().fetch();
    onData(null, {reports});
  }
};

//const Loading = () => (<div>Hmm…</div>);

export default composeAll(
    composeWithTracker(composer, Loading),
    useDeps()
)(ReportsList);*/
