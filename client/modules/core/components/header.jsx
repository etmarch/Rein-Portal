import React from 'react';
import Navigation from './navigation.jsx';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Badge from 'material-ui/lib/badge';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import SocialPublic from 'material-ui/lib/svg-icons/social/public';
import ActionAssessment from 'material-ui/lib/svg-icons/action/assessment';
import ActionSettings from 'material-ui/lib/svg-icons/action/settings';
import ActionCardMembership from 'material-ui/lib/svg-icons/action/card-membership';
import ActionExitToApp from 'material-ui/lib/svg-icons/action/exit-to-app';


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


    titleClick() {
        FlowRouter.go('/');
    }

    render() {

        // Roles Debugging
        //const userRole = Roles.getRolesForUser( Meteor.userId() );
        //const isInRole = Roles.userIsInRole( this.userId, 'admin' );
        //console.log(userRole);
        //console.log(isInRole);

        return (
          <div>
              <header>
                  <AppBar
                    title={ <span className="app-title">Rein Portal</span> }
                    //titleStyle={{ 'cursor': 'pointer', 'display' : 'inline-block' }}
                    onTitleTouchTap={this.titleClick}
                    iconElementRight={<IconButtonMenu />}
                    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}>
                  </AppBar>
              </header>

              <LeftNav
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={open => this.setState({open})}
              >
                  <MenuItem
                    containerElement={<a href="/dashboard" />}
                    primaryText="Dashboard"
                    leftIcon={<SocialPublic />}/>

                  <MenuItem
                    containerElement={<a href="/" />}
                    primaryText="Reports"
                    leftIcon={<ActionAssessment />}/>

                  <MenuItem
                    containerElement={<a href="/" />}
                    primaryText="Billing"
                    leftIcon={<ActionCardMembership />}/>

                  <MenuItem
                    containerElement={<a href="/" />}
                    primaryText="Settings"
                    leftIcon={<ActionSettings />}/>

                  <MenuItem
                    containerElement={<a href="/logout" />}
                    primaryText="Sign out"
                    leftIcon={<ActionExitToApp />} />
              </LeftNav>
          </div>
        )
    }
}

const IconButtonMenu = () => (
  <div>
      <NotificationBadge />

      <IconMenu
        iconButtonElement={
            <IconButton
                style={{ 'padding': '12px 30px', 'width': 'initial' }}
                iconStyle={{ 'width': '30px', 'height': 30 }}>
            <MoreVertIcon />
            </IconButton>
            }
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
          <MenuItem
            containerElement={<a href="/dashboard" />}
            primaryText="Dashboard"
            leftIcon={<SocialPublic />}/>

          <MenuItem
            containerElement={<a href="/" />}
            primaryText="Reports"
            leftIcon={<ActionAssessment />}/>

          <MenuItem
            containerElement={<a href="/" />}
            primaryText="Billing"
            leftIcon={<ActionCardMembership />}/>

          <MenuItem
            containerElement={<a href="/" />}
            primaryText="Settings"
            leftIcon={<ActionSettings />}/>

          <MenuItem
            containerElement={<a href="/logout" />}
            primaryText="Sign out"
            leftIcon={<ActionExitToApp />} />
      </IconMenu>
  </div>
);


const NotificationBadge = () => (
  <span>
      <Badge
        badgeContent={4}
        primary={true}
      >
          <NotificationsIcon />
      </Badge>
  </span>
);


