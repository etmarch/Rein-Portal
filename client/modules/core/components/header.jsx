import React from 'react';
import Navigation from './navigation.jsx';
import { AppBar } from 'material-ui';
import ActionHome from 'material-ui/lib/svg-icons/action/home';

class Header extends React.Component {

    titleClick() {
        console.log('Title clicked -'+this);
        FlowRouter.go('/');
    }
    render() {
        return (
          <header>
              <AppBar
                title={<h2> Rein Portal </h2> }
                onTitleTouchTap={this.titleClick}
                iconElementRight={<Navigation />}>
              </AppBar>
          </header>
        )
    }
}

export default Header;
