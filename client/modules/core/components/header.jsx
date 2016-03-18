import React from 'react';
import Navigation from './navigation.jsx';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Badge from 'material-ui/lib/badge';
import Divider from 'material-ui/lib/divider';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import SocialPublic from 'material-ui/lib/svg-icons/social/public';
import ActionAssessment from 'material-ui/lib/svg-icons/action/assessment';
import ActionSettings from 'material-ui/lib/svg-icons/action/settings';
import ActionCardMembership from 'material-ui/lib/svg-icons/action/card-membership';
import ActionExitToApp from 'material-ui/lib/svg-icons/action/exit-to-app';
import MapsTerrain from 'material-ui/lib/svg-icons/maps/terrain';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false, name: null};
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

    componentDidMount() {
        const userName = Meteor.userId() ? Meteor.user().username : 'Not Logged In';
        this.setState({name: userName});
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
                    title={
                    <div>
                        <MapsTerrain
                            style={{
                                'height': 44,
                                'width': 44,
                                'marginTop' : -5,
                                'marginRight': 20
                            }}
                            color='rgb(29, 54, 193)' />
                        <h3 className="app-title display-1 mdl-color-text--white-600">Rein Portal</h3>
                       </div> }
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
                  <h4 style={{'textAlign': 'center'}}>{this.state.name}</h4>
                  <MenuItem
                    containerElement={<a href="/dashboard" />}
                    primaryText="Dashboard"
                    leftIcon={<SocialPublic />}
                    onTouchTap={this.handleClose.bind(this)}/>
                  <Divider />

                  <MenuItem
                    linkButton
                    containerElement={<a href="/invite" />}
                    primaryText="Reports"
                    leftIcon={<ActionAssessment />}
                    onTouchTap={this.handleClose.bind(this)}/>
                  <Divider />

                  <MenuItem
                    containerElement={<a href="/" />}
                    primaryText="Billing"
                    leftIcon={<ActionCardMembership />}
                    onTouchTap={this.handleClose.bind(this)}/>
                  <Divider />

                  <MenuItem
                    containerElement={<a href="/" />}
                    primaryText="Settings"
                    leftIcon={<ActionSettings />}
                    onTouchTap={this.handleClose.bind(this)}/>
                  <Divider />

                  <MenuItem
                    containerElement={<a href="/logout" />}
                    primaryText="Sign out"
                    leftIcon={<ActionExitToApp />}
                    onTouchTap={this.handleClose.bind(this)}/>
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
            leftIcon={<ActionExitToApp />}/>
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


