import AdminClientList from '../components/admin_client_list.jsx';
import Loading from '../../core/components/loading.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscription = Meteor.subscribe('users.list');
  
  if (subscription.ready()) {

    const selector = {
      _id : { $ne: Meteor.userId() }
    };
    const data = {
      ready: true,
      clients: Meteor.users.find(selector).fetch()
    };
    console.dir(data);
    onData(null, data);
  } else {
    onData();
  }
};

//const Loading = () => (<div>Hmm…</div>);

export default composeAll(
    composeWithTracker(composer, Loading),
    useDeps()
)(AdminClientList);