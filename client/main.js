import {createApp} from 'mantra-core';
import {initContext} from './configs/context';

// modules
import coreModule from './modules/core';
import commentsModule from './modules/comments';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// init context
const context = initContext();
console.log(context);

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.init();
