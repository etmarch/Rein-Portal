import {Posts} from '/lib/collections.js';

export default function () {
  if (!global.posts.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      global.posts.insert({title, content});
    }
  }
}
