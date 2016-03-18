export default {
    create({Meteor, LocalState}, reportData) {
        LocalState.set('CREATE_REPORT_ERROR', null);

        // sample of validation pattern, can probably remove this
        if (!text) {
            LocalState.set('CREATE_REPORT_ERROR', 'Comment text is required.');
            return;
        }

        const id = Meteor.uuid();

        Meteor.call('reports.create', id, postId, text, (err) => {
            if (err) {
                alert(`Post creating failed: ${err.message}`);
            }
        });
    },

    clearErrors({LocalState}) {
        return LocalState.set('CREATE_REPORT_ERROR', null);
    }
};
