export default {
  createReport({Meteor, LocalState, FlowRouter}, title, content, clientId) {
    if (!title || !content) {
      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid(); // admin Id

    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('reports.create', id, title, content, clientId, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    FlowRouter.go(`/post/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
