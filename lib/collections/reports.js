import {Mongo} from 'meteor/mongo';

// global.posts = new Mongo.Collection('posts');
// global.comments = new Mongo.Collection('comments');

export const Reports = new Mongo.Collection('Reports');
Schema = {};

Schema.SocialFollowers = new SimpleSchema({
   facebook: {
       type: Number,
       optional: true
   },
    twitter: {
        type: Number,
        optional: true
    },
    linkedIn: {
        type: Number,
        optional: true
    },
    googlePlus: {
        type: Number,
        optional: true
    },
    instagram: {
        type: Number,
        optional: true
    },
    yelp: {
        type: Number,
        optional: true
    },
    tripAdviser: {
        type: Number,
        optional: true
    }
});

Schema.SEOBigThree = new SimpleSchema({
    workCompleted: {
        type: String,
        optional: true
    },
    workToComplete: {
        type: String,
        optional: true
    },
    needFromClient: {
        type: String,
        optional: true
    }
})

Reports.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 60,
        min: 1
    },
    clientId: {
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
    },
    nySessionsCount: {
        type: Number,
        optional: true

    },
    londonSessionsCount: {
        type: Number,
        optional: true

    },
    totalSessions: { // automatically add both session counts above
        type: Number,
        optional: true
    },
    transactions: {
        type: Number,
        optional: true
    },
    socialFollowersCount: {
        type: Schema.SocialFollowers,
        optional: true
    },
    onSiteSEO: {
        type: Schema.SEOBigThree,
        optional: true
    },
    offSiteSEO: {
        type: Schema.SEOBigThree,
        optional: true
    }

}));
