export default {
  login({Meteor, LocalState, FlowRouter}, email, password) {

    if (!email || !password) {
      return LocalState.set('LOGIN_ERROR', 'Login & Password are required!');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      FlowRouter.go('/');
    });

  },

  loginErrorClear({LocalState}) {
    return LocalState.set('LOGIN_ERROR', null);
  },

  // Change this to client resetting pw and logging in for first time
  register({Meteor, LocalState, FlowRouter}, email, password1, password2) {

    if (!email || !password1 || !password2) {
      return LocalState.set('REGISTER_ERROR', 'Please fill out all the required fileds!');
    }

    if (password1 !== password2 ) {
      return LocalState.set('REGISTER_ERROR', 'Passwords do not match!');
    }

    Accounts.createUser({email, password: password1}, (err) => {
      if (err && err.reason) {
        return LocalState.set('REGISTER_ERROR', err.reason);
      }
      FlowRouter.go('/');
    });
  },

  registerErrorClear({LocalState}) {
    return LocalState.set('REGISTER_ERROR', null);
  },

  // Admin submits invite form
  submitInvite({Meteor, LocalState, FlowRouter}, email) {
    console.log('--SubmitInvite Action Call--');
    if (!email) {
      return LocalState.set('INVITE_ERROR', 'Proper Email Address is Required!');
    }

    LocalState.set('INVITE_ERROR', null);

    Meteor.call('accounts.sendInvite', email, ( err ) => {
      if (err)
        return LocalState.set('INVITE_ERROR', err.reason);
    });

    FlowRouter.go('/dashboard');
  },

  inviteErrorClear({LocalState}) {
    return LocalState.set('INVITE_ERROR', null);
  }

};