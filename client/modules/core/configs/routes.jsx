import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import PostList from '/client/modules/core/containers/postlist';
import Post from '/client/modules/core/containers/post';
import NewPost from '/client/modules/core/containers/newpost';
import Login from '/client/modules/core/components/login.jsx';


function checkLoggedIn(ctx, redirect) {
    if (!Meteor.userId() && !Meteor.loggingIn()) {
        redirect('/');
    }
}

function redirectIfLoggedIn(ctx, redirect) {
    if (Meteor.userId()) {
        redirect('/');
    }
}

export default function (injectDeps) {
    const MainLayoutCtx = injectDeps(MainLayout);


    FlowRouter.route('/', {
        name: 'posts.list',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<PostList />)
            });
        }
    });


    // Login Route
    FlowRouter.route('/login', {
        name         : 'login',
        triggersEnter: [redirectIfLoggedIn],
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Login />)
            });
        }
    });

    FlowRouter.route('/logout', {
        name: 'logout',
        action() {
            // Accounts.logout();
            Meteor.logout(() => {
                FlowRouter.go('/login');
            });
        }
    });


    FlowRouter.route('/post/:postId', {
        name: 'posts.single',
        // triggersEnter: [ checkLoggedIn ],
        action({postId}) {
            mount(MainLayoutCtx, {
                content: () => (<Post postId={postId}/>)
            });
        }
    });

    FlowRouter.route('/new-post', {
        name: 'newpost',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<NewPost/>)
            });
        }
    });
}
