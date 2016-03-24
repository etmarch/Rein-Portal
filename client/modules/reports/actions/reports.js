export default {
    create({Meteor, LocalState}, reportData) {
        LocalState.set('CREATE_REPORT_ERROR', null);

        // sample of validation pattern, can probably remove this
        if (!reportData.title) {
            LocalState.set('CREATE_REPORT_ERROR', 'Report Title is required.');
            return;
        }

        const id = Meteor.uuid();

        if (!Roles.userIsInRole(id, 'admin', Roles.GLOBAL_GROUP)) {
            alert('You are not the admin!');
            return;
        }

        Meteor.call('reports.create', reportData, (err) => {
            if (err) {
                alert(`Post creating failed: ${err.message}`);
            }
        });
    },

    clearErrors({LocalState}) {
        return LocalState.set('CREATE_REPORT_ERROR', null);
    }
};
