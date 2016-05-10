import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import PostList from '/client/modules/core/containers/postlist';
import Post from '/client/modules/core/containers/post';
import NewPost from '/client/modules/core/containers/newpost';
import Login from '/client/modules/users/components/login.jsx';
import Invite from '/client/modules/users/components/invite.jsx';
import AdminClientList from '/client/modules/users/containers/admin_client_list';
import AdminSingleClient from '/client/modules/users/containers/admin_single_client';
import Enrollment from '/client/modules/core/components/enrollment.jsx';
import Admin from '/client/modules/core/components/admin.jsx';
import Dashboard from '/client/modules/core/components/dashboard.jsx';
import NotFound from '/client/modules/core/components/not_found.jsx';
import CreateReport from '/client/modules/reports/components/new_report.jsx';
import NotificationsList from '/client/modules/notifications/containers/notifications_list';
import ReportsList from '/client/modules/reports/containers/reports_list';
import SingleReport from '/client/modules/reports/containers/single_report';


function checkLoggedIn(ctx, redirect) {
    if (!Meteor.userId() && !Meteor.loggingIn() || !Roles.userIsInRole(Meteor.userId(), [ 'client', 'admin' ])) {
        // alert('Not logged In');
        redirect('/login');
    }
}

function checkIfAdmin(ctx, redirect) {
    if (!Meteor.userId() && !Meteor.loggingIn()) {
        redirect('/login');
    } else { // redirect client from admin routes
        if (!Roles.userIsInRole(Meteor.userId(), ['admin'])) {
            alert("Admin Access Only!");
            redirect('/');
        }
    }
}

function redirectIfLoggedIn(ctx, redirect) {
    if (Meteor.userId()) {
        //alert("Admin Access Only!");
        redirect('/');
    }
}

export default function (injectDeps) {
    const MainLayoutCtx = injectDeps(MainLayout);

    const publicRoutes = FlowRouter.group({
        name         : 'public',
        triggersEnter: [ redirectIfLoggedIn ]
    });

    // Login Route
    publicRoutes.route('/login', {
        name: 'login',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Login />)
            });
        }
    });


    publicRoutes.route('/enrollment/:token', {
        name: 'enrollment',
        action(params) {
            console.log(params.token);
            mount(MainLayoutCtx, {
                content: () => (<Enrollment token={ params.token }/>)
            });
        }
    });

    // Routes for all protected content
    const protectedRoutes = FlowRouter.group({
        name         : 'private',
        triggersEnter: [checkLoggedIn]
    });

    protectedRoutes.route('/', {
        name: 'posts.list',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Dashboard />)
            });
        }
    });


    protectedRoutes.route('/logout', {
        name: 'logout',
        action() {
            // Accounts.logout();
            Meteor.logout(() => {
                FlowRouter.go('/login');
            });
        }
    });

    protectedRoutes.route('/dashboard', {
        name: 'dashboard',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Dashboard />)
            });
        }
    });


    protectedRoutes.route('/post/:postId', {
        name: 'posts.single',
        triggersEnter: [ checkLoggedIn ],
        action({postId}) {
            mount(MainLayoutCtx, {
                content: () => (<Post postId={postId}/>)
            });
        }
    });

    protectedRoutes.route('/new-post', {
        name: 'newpost',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<NewPost/>)
            });
        }
    });

    protectedRoutes.route('/my-reports', {
        name: 'myreports',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<NewPost/>)
            });
        }
    });

    protectedRoutes.route('/report/:reportId', {
        name: 'singlereport',
        action({reportId}) {
            mount(MainLayoutCtx, {
                content: () => (<ReportSingle reportId={reportId} />)
            });
        }
    });

    protectedRoutes.route('/my-notifications', {
        name: 'mynotifications',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<NotificationsList/>)
            });
        }
    });

    // Routes for all protected content
    const adminRoutes = FlowRouter.group({
        name         : 'admin',
        prefix       : '/admin',
        triggersEnter: [checkIfAdmin]
    });

    adminRoutes.route('/', {
        name: 'admin',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Admin />)
            });
        }
    });

    adminRoutes.route('/invite', {
        name: 'invite',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Invite />)
            });
        }
    });

    adminRoutes.route('/new-report', {
        name: 'newreport',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<CreateReport />)
            });
        }
    });

    adminRoutes.route('/reports', {
        name: 'reportsList',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<ReportsList />)
            });
        }
    });

    adminRoutes.route('/reports/:reportId', {
        name: 'singleReport',
        action({reportId}) {
            mount(MainLayoutCtx, {
                content: () => (<SingleReport reportId={reportId} />)
            });
        }
    });

    adminRoutes.route('/clients', {
        name: 'adminClientList',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<AdminClientList />)
            });
        }
    });

    adminRoutes.route('/clients/:clientId', {
        name: 'adminSingleClient',
        action({clientId}) {
            mount(MainLayoutCtx, {
                content: () => (<AdminSingleClient clientId={clientId} />)
            });
        }
    });
    
    FlowRouter.notFound = {
        action: function () {
            mount(MainLayoutCtx, {
                content: () => (<NotFound />)
            });
        }
    };
}
