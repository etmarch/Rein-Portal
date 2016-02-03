import Colls from '/lib/collections/index';


export default function () {
  if (!Colls.Posts.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      Colls.Posts.insert({title, content});
    }
  }

  if (Meteor.users.find().count() < 1) {
    let id = Accounts.createUser({
      email: 'admin@admin.com',
      password: 'Admin1',
      username: 'admin'
    });
    Roles.addUsersToRoles(id, 'admin', Roles.GLOBAL_GROUP);
  }
}
