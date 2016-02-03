import {Mongo} from 'meteor/mongo';

// global.posts = new Mongo.Collection('posts');
// global.comments = new Mongo.Collection('comments');

export const Reports = new Mongo.Collection('reports');


Reports.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 60,
        min: 1
    },
    accountId: {
        type: String,
        optional: true,
        regEx: SimpleSchema.RegEx.Id
    },
    createdAt: {
        type: Date,
        optional: true,
        denyUpdate: true,
        autoValue: function () {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        }
    },
    updatedAt: {
        type: Date,
        optional: true,
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        }
    },
    s3Url: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true

    },
    comments: { // Text fields for each comment
        type: [String],
        optional: true,
        defaultValue: []
    },
    isSeen: {
        type: Boolean,
        optional: true,
        defaultValue: false
    }
}));
