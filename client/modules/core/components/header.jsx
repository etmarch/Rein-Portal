import React from 'react';
import Navigation from './navigation.jsx';
import NotificationBadge from './../../notifications/containers/notification_badge';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Divider from 'material-ui/lib/divider';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import SocialPublic from 'material-ui/lib/svg-icons/social/public';
import ActionAssessment from 'material-ui/lib/svg-icons/action/assessment';
import ActionSettings from 'material-ui/lib/svg-icons/action/settings';
import ActionCardMembership from 'material-ui/lib/svg-icons/action/card-membership';
import ActionExitToApp from 'material-ui/lib/svg-icons/action/exit-to-app';
import MapsTerrain from 'material-ui/lib/svg-icons/maps/terrain';

// Array of menu elements for leftNav
const leftNavAdminMenuItems = [
  { url: '/dashboard', text: 'Dashboard', icon: <SocialPublic /> },
  { url: '/admin/invite', text: 'Invite New Client', icon: <ActionAssessment /> },
  { url: '/admin/reports', text: 'All Reports', icon: <ActionHome /> },
  { url: '/admin/reports', text: 'New Report', icon: <ActionHome /> },
  { url: '/admin/clients', text: 'All Clients', icon: <NotificationsIcon /> }
];

const leftNavClientMenuItems = [
  { url: '/dashboard', text: 'Dashboard', icon: <SocialPublic /> },
  { url: '/dashboard', text: 'My Reports', icon: <ActionAssessment /> },
  { url: '/dashboard', text: 'My Payments', icon: <ActionAssessment /> },
  { url: '/logout', text: 'Sign Out', icon: <ActionExitToApp /> }
];

// Array of menu items for right drop down nav - currently not being used
const rightNavMenuItems = [
  { url: '/dashboard', text: 'Dashboard', icon: <SocialPublic /> },
  { url: '/admin/invite', text: 'Invite New Client', icon: <ActionAssessment /> },
  { url: '/logout', text: 'Sign Out', icon: <ActionExitToApp /> }
];

export default class Header extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { open: false, name: null };
  }

  handleToggle() {
    this.setState( { open: !this.state.open } );
  }

  handleClose() {
    this.setState( { open: false } );
  }

  titleClick() {
    FlowRouter.go( '/' );
  }

  menuItemRender( menuItems ) {
    return (
        <div>
          {menuItems.map( ( menuItem, index ) => {
                return (
                    <div key={`menuItem-${ index }` }>
                      <MenuItem
                          containerElement={<a href={menuItem.url} />}
                          primaryText={menuItem.text}
                          leftIcon={menuItem.icon}
                          onTouchTap={this.handleClose.bind(this)}
                      />
                      <Divider />
                    </div>
                )
              }
          )}
        </div>
    );
  };

  componentDidMount() {
    const userName = Meteor.userId() ? Meteor.user().username : 'Not Logged In';
    if ( !!Meteor.userId() )
      this.setState( { name: userName } );


  }

  render() {

    // Roles Debugging
    //const userRole = Roles.getRolesForUser( Meteor.userId() );
    //console.log(userRole);
    //console.log(isInRole);
    const isInRole = Roles.userIsInRole( Meteor.userId(), 'admin' );
    let leftNavMenu = [];
    if (isInRole === true) {
      leftNavMenu = leftNavAdminMenuItems;
    } else {
      leftNavMenu = leftNavClientMenuItems;
    }

    return (
        <div>
          <header>
            <AppBar
                title={
                    <div>
                    <a href="/">
                        <MapsTerrain
                            style={{
                                'height': 44,
                                'width': 44,
                                'marginTop' : -5,
                                'marginRight': 20
                            }}
                            color='rgb(29, 54, 193)'
                        />
                    </a>
                    <h3 className="app-title display-1 mdl-color-text--white-600">Rein Group</h3>
                </div> }
                onTitleTouchTap={this.titleClick}
                iconElementRight={ Meteor.userId() ? <IconButtonMenu /> : <ActionHome />}
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
            {this.menuItemRender( leftNavMenu )}
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
                iconStyle={{ 'width': '30px', 'height': 30, 'marginBottom' : 22 }}>
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
