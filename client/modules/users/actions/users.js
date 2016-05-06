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
  submitInvite({Meteor, LocalState, FlowRouter}, data) {
    console.log('--SubmitInvite Action Call--');
    console.log(data);
    if (!data.email) {
      return LocalState.set('INVITE_ERROR', 'Proper Email Address is Required!');
    }

    if (!data.firstName) {
      return LocalState.set('INVITE_ERROR', 'Clients First Name is Required!');
    }

    if (!data.lastName) {
      return LocalState.set('INVITE_ERROR', 'Last Name is Required!');
    }
    if (!data.companyName) {
      return LocalState.set('INVITE_ERROR', 'Company Name is Required!');
    }

    LocalState.set('INVITE_ERROR', null);

    check(data.email, String);
    check(data.firstName, String);
    check(data.lastName, String);
    check(data.companyName, String);

    check([data, LocalState, FlowRouter, Meteor], [Match.Any]);

    Meteor.call('accounts.sendInvite', data, ( err ) => {
      if (err)
        return LocalState.set('INVITE_ERROR', err.reason);
    });

    FlowRouter.go('/dashboard');
  },

  inviteErrorClear({LocalState}) {
    return LocalState.set('INVITE_ERROR', null);
  }

};