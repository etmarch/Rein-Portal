import Collections from '/lib/collections/index';
import { Roles } from 'meteor/alanning:roles';
//import { _ }from 'meteor/underscore';
import _ from 'lodash';

const users = [
  { name : 'admin', email : 'admin@admin.com', roles : [ 'admin' ], pw : 'admin1' },
  { name : 'client', email : 'client@client.com', roles : [ 'client' ], pw : 'client1' }
];

function getRandomInt( min, max ) {
  return Math.floor( Math.random() * (max - min) ) + min;
}

export default function () {

  let userCount = Meteor.users.find().count();

  if ( userCount < 1 ) {
    _.each(
        users, function ( user ) {
          let id;

          id = Accounts.createUser(
              {
                email    : user.email,
                password : user.pw,
                username : user.name,
                profile: {
                  firstName: faker.name.firstName(),
                  lastName: faker.name.lastName(),
                  companyName: faker.company.companyName()
                }
              }
          );

          Roles.addUsersToRoles( id, user.roles );

          for ( let i = 0; i < 3; i++ ) {
            const notifyData = {
              title : 'Report ' + i + ' for ' + faker.date.recent(),
              link : '/my-notifications',
              ownerId: id,
              className: 'centered',
              createdAt: new Date(),
              isRead: false
            };

            Collections.Notifications.insert( notifyData, ( err, res ) => {
              if ( err ) {
                console.log( "error doing initial report inserts", err.reason );
              } else {
                console.log( "Created! " + res );
              }

            } );


            let reportData = {
              title                : 'Report ' + i + ' for ' + faker.date.recent(),
              clientId             : id,
              createdAt            : new Date(),
              isSeen               : false,
              nySessionsCount      : getRandomInt( 50, 250 ),
              londonSessionsCount  : getRandomInt( 25, 500 ),
              totalSessions        : getRandomInt( 50, 350 ),
              transactions         : getRandomInt( 50, 350 ),
              socialFollowersCount : {
                facebook   : getRandomInt( 50, 350 ),
                twitter    : getRandomInt( 50, 350 ),
                googlePlus : getRandomInt( 50, 350 )
              },
              onSiteSEO            : {
                workCompleted  : faker.lorem.paragraph(),
                workToComplete : faker.lorem.paragraph(),
                needFromClient : faker.lorem.paragraph()
              },
              offSiteSEO           : {
                workCompleted  : faker.lorem.paragraph(),
                workToComplete : faker.lorem.paragraph(),
                needFromClient : faker.lorem.paragraph()
              }
            };


            Collections.Reports.insert( reportData, ( err, res ) => {
              if ( err ) {
                console.log( "error doing initial report inserts", err.reason );
              } else {
                console.log( "Created! " + res );
              }

            } );

          }

        }
    );
  }


  if ( userCount > 0 && userCount < 3 ) {
    for ( let j = 0; j < 3; j++ ) {
      // Add 'client' users and store the id
      let id = Accounts.createUser(
          {
            email    : 'client' + j + '@client.com',
            password : 'client' + j,
            username : 'client' + j,
            profile: {
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
              companyName: faker.company.companyName()
            }
          }
      );
      if ( !!id ) {
        for ( let k = 0; k < 3; k++ ) {

          let reportData = {
            title                : 'Report ' + k + ' for ' + faker.date.recent(),
            clientId             : id,
            createdAt            : new Date(),
            isSeen               : false,
            nySessionsCount      : getRandomInt( 50, 250 ),
            londonSessionsCount  : getRandomInt( 25, 500 ),
            totalSessions        : getRandomInt( 50, 350 ),
            transactions         : getRandomInt( 50, 350 ),
            socialFollowersCount : {
              facebook   : getRandomInt( 50, 350 ),
              twitter    : getRandomInt( 50, 350 ),
              googlePlus : getRandomInt( 50, 350 )
            },
            onSiteSEO            : {
              workCompleted  : faker.lorem.paragraph(),
              workToComplete : faker.lorem.paragraph(),
              needFromClient : faker.lorem.paragraph()
            },
            offSiteSEO           : {
              workCompleted  : faker.lorem.paragraph(),
              workToComplete : faker.lorem.paragraph(),
              needFromClient : faker.lorem.paragraph()
            }
          };


          Collections.Reports.insert( reportData, ( err, res ) => {
            if ( err ) {
              console.log( "error doing initial report inserts", err.reason );
            } else {
              console.log( "Created! " + res );
            }

          } );

          const notifyData = {
            title : 'Report ' + k + ' for ' + faker.date.recent(),
            link : '/my-notifications',
            ownerId: id,
            className: 'centered',
            createdAt: new Date(),
            isRead: false
          };

          Collections.Notifications.insert( notifyData, ( err, res ) => {
            if ( err ) {
              console.log( "error doing initial report inserts", err.reason );
            } else {
              console.log( "Created! " + res );
            }

          } );


        }
      }
    }
  }
}

