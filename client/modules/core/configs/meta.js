import {Meteor} from 'meteor/meteor';
import {DocHead} from 'meteor/kadira:dochead';


/* Title */
const title = 'Rein Group Portal';

/* Meta */
const metas = [
    {
        name   : 'description',
        content: 'Rein Group Portal.'
    }, {
        name   : 'viewport',
        content: 'width=device-width, initial-scale=1'
    }
];

/* Link */
const links = [
    {
        rel : 'stylesheet',
        href: '//cdn.jsdelivr.net/flexboxgrid/6.3.0/flexboxgrid.min.css'
    },
    {
        rel : 'stylesheet',
        href: 'https://code.getmdl.io/1.1.1/material.indigo-pink.min.css'
    },
    {
        rel : 'script',
        href: 'https://code.getmdl.io/1.1.1/material.min.js'
    }
];


Meteor.startup(() => {
    DocHead.setTitle(title);
    metas.map(meta => DocHead.addMeta(meta));
    links.map(link => DocHead.addLink(link));
});