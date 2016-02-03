import React from 'react';

import dataComposer from '../containers/login.js';
import Component from './login_form.jsx';

const Container = dataComposer(Component);

export default class extends React.Component {
    render() {
        return (
            <div>
                <Container />
            </div>
        )

    }
}




