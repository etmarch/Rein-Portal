import React from 'react';
import Navigation from './navigation.jsx';
import { AppCanvas, Paper, AppBar } from 'material-ui';

const Layout = ({content = () => null }) => (
  <AppCanvas>
      <header>
          <AppBar
            title={<h2> Portal </h2> }>
              <Navigation />
          </AppBar>
      </header>

      <Paper>
          <div>
              { content() }
          </div>
      </Paper>

      <footer>
          <div>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> & Meteor.</div>
      </footer>
  </AppCanvas>
);

export default Layout;
