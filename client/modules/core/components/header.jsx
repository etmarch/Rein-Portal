import React from 'react';
import Navigation from './navigation.jsx';
import { AppBar, LeftNav, MenuItem, RadioButton } from 'material-ui';
import ActionHome from 'material-ui/lib/svg-icons/action/home';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    //const handeThis = () => {this.setState({open: false})}


    titleClick() {
        FlowRouter.go('/');
    }

    render() {

        // Roles Debugging
        const userRole = Roles.getRolesForUser( Meteor.userId() );
        const isInRole = Roles.userIsInRole( this.userId, 'admin' );
        console.log(userRole);
        console.log(isInRole);

        return (
          <div>
              <header>
                  <AppBar
                    title={<h2> Rein Portal </h2> }
                    onTitleTouchTap={this.titleClick}
                    iconElementRight={<Navigation />}
                    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}>
                  </AppBar>
              </header>

              <LeftNav
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={open => this.setState({open})}
              >
                  <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item</MenuItem>
                  <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
              </LeftNav>
          </div>
        )
    }
}

