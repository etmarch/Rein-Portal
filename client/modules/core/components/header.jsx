import React from 'react';
import Navigation from './navigation.jsx';
import { AppBar } from 'material-ui';

class Header extends React.Component {

    titleClick() {
        console.log('Title clicked -'+this);
        FlowRouter.go('/');
    }
    render() {
        return (
          <div>
              <AppBar
                title={<h2> Rein Portal </h2> }
                onTitleTouchTap={this.titleClick}
                iconElementRight={<Navigation />}>
              </AppBar>
          </div>
        )
    }
}

export default Header;
