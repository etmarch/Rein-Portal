import React from 'react';
import Card from 'material-ui/lib/card/card';
import dataComposer from '../containers/invite.js';
import Component from './invite_form.jsx';

const Container = dataComposer(Component);

class Invite extends React.Component {

    render() {
        return (
          <Card>
              <h2>Future Invite Register Page</h2>
            <br />
            <Container />
          </Card>
        )
    }
}

export default Invite;