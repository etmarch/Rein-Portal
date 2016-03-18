import Colls from '/lib/collections/index';

const users = [
  { name : 'admin', email : 'admin@admin.com', roles : [ 'admin' ], pw : 'admin1' },
  { name : 'client', email : 'client@client.com', roles : [ 'client' ], pw : 'client1' }
];

export default function () {
  if ( !Colls.Posts.findOne() ) {
    for ( let lc = 1; lc <= 5; lc++ ) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      Colls.Posts.insert( { title, content } );
    }
  }

  if ( Meteor.users.find().count() < 1 ) {
    _.each(
        users, function ( user ) {
          let id;

          id = Accounts.createUser(
              {
                email    : user.email,
                password : user.pw,
                username : user.name
              }
          );

          Roles.addUsersToRoles( id, user.roles, Roles.GLOBAL_GROUP );
        }
    );
  }
}
