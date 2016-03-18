import React from 'react';
import Navigation from './navigation.jsx';
import { Paper } from 'material-ui';
import ActionHome from 'material-ui/lib/svg-icons/action/home';

class Footer extends React.Component {

    render() {
        return (
          <footer className="mdl-mini-footer">
              <div className="mdl-mini-footer__left-section">
                  <div className="mdl-logo">
                      More Information
                  </div>
                  <ul className="mdl-mini-footer__link-list">
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Privacy and Terms</a></li>
                      <li><a href="#">User Agreement</a></li>
                  </ul>
              </div>
              <div className="mdl-mini-footer__right-section">
                  <button className="mdl-mini-footer__social-btn"></button>
                  <button className="mdl-mini-footer__social-btn"></button>
                  <button className="mdl-mini-footer__social-btn"></button>
              </div>
          
        {/*<footer>
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
          </footer>*/}
              </footer>
        )
    }
}

export default Footer;
