import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import PostList from '/client/modules/core/containers/postlist';
import Post from '/client/modules/core/containers/post';
import NewPost from '/client/modules/core/containers/newpost';
import Login from '/client/modules/core/components/login.jsx';
import Invite from '/client/modules/core/components/invite.jsx';
import Admin from '/client/modules/core/components/admin.jsx';
import Dashboard from '/client/modules/core/components/dashboard.jsx';


function checkLoggedIn(ctx, redirect) {
    if (!Meteor.userId() && !Meteor.loggingIn() || !Roles.userIsInRole(Meteor.userId(), [ 'client', 'admin' ])) {
        alert('Not logged In');
        redirect('/login');
    }
}

function checkIfAdmin(ctx, redirect) {
    if (!Meteor.userId() && !Meteor.loggingIn()) {
        redirect('/login');
    } else { // redirect client from admin routes
        if (!Roles.userIsInRole(Meteor.userId(), 'admin')) {
            alert("Admin Access Only!");
            redirect('/');
        }
    }
}

function redirectIfLoggedIn(ctx, redirect) {
    if (Meteor.userId()) {
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


    publicRoutes.route('/invite/:token', {
        name: 'invite',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Invite />)
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
                content: () => (<PostList />)
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
        // triggersEnter: [ checkLoggedIn ],
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
}
