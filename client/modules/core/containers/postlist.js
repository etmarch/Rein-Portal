import PostList from '../components/postlist.jsx';
import Loading from '../components/loading.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.list').ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }
};

//const Loading = () => (<div>Hmm…</div>);

export default composeAll(
  composeWithTracker(composer, Loading),
  useDeps()
)(PostList);
