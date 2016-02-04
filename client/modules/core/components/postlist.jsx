import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const PostList = ({posts}) => (
  <div className='postlist'>
      <List>
      {posts.map(post => (
        <ListItem key={post._id}>
          <a href={`/post/${post._id}`}>{post.title}</a>
        </ListItem>
      ))}
    </List>
  </div>
);

export default PostList;
