import Colls from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
    Meteor.methods({
        'reports.create'(_id, title, content) {
            check(_id, String);
            check(title, String);
            check(content, String);

            const createdAt = new Date();
            const report = {
                _id, title, content, createdAt,
                saving: true
            };
            Colls.Reports.insert(report);
        }
    });
}
