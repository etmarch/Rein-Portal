import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import AppCanvas from 'material-ui/lib/app-canvas';
import Paper from 'material-ui/lib/paper';


const Layout = ({content = () => null }) => (


  <AppCanvas>
      <Header />

      <div className="container-fluid">
          <div className="row">
              <div className="col-xs-12">
                  <div className="box">
                      <Paper>
                          { content() }
                      </Paper>
                  </div>
              </div>
          </div>
      </div>
      <Footer />
  </AppCanvas>



);

export default Layout;
