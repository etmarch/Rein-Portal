import React from 'react';
import Header from './header.jsx';
import { AppCanvas, Paper } from 'material-ui';

// Hack for getting flexbox css CDN to load for now..
var linkInfo = {rel: 'stylesheet', href: '//cdn.jsdelivr.net/flexboxgrid/6.3.0/flexboxgrid.min.css'};
DocHead.addLink(linkInfo);

const Layout = ({content = () => null }) => (

  <AppCanvas>
      <header>
          <Header />
      </header>
      <div className="container-fluid">
          <Paper>
              <div>
                  { content() }
              </div>
          </Paper>
      </div>

      <footer>
          <div>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> & Meteor.</div>
      </footer>

  </AppCanvas>

);

export default Layout;
