import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import usersModule from './modules/users';
import commentsModule from './modules/comments';
import reportsModule from './modules/reports';
import notificationsModule from './modules/notifications';



import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// init context
const context = initContext();
console.log('main.js -- outputting context and localState');
//console.dir(JSON.stringify(context.LocalState));
console.dir((context));

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.loadModule(reportsModule);
app.loadModule(notificationsModule);
app.loadModule(usersModule);
app.init();




