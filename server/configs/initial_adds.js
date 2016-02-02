import Colls from '/lib/collections.js';

export default function () {
  if (!Colls.Posts.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      Colls.Posts.insert({title, content});
    }
  }
}
