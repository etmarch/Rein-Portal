import React from 'react';
import Navigation from './navigation.jsx';
import { Paper } from 'material-ui';
import ActionHome from 'material-ui/lib/svg-icons/action/home';

class Footer extends React.Component {

    render() {
        return (
          <footer>
              <div className="container-fluid">
                  <div className="row center-xs">
                      <div className="col">
                          <div className="box">
                              <Paper>
                                  <ActionHome />
                              </Paper>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
        )
    }
}

export default Footer;
