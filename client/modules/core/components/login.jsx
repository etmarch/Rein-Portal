import React from 'react';

import dataComposer from '../containers/login.js';
import Component from './login_form.jsx';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui';

const Container = dataComposer(Component);

export default class extends React.Component {
    render() {
        return (
          <div style={{'textAlign': 'center'}}>
              <Card>
                  <CardHeader>
                      <CardTitle>Login</CardTitle>
                  </CardHeader>
                  <CardText>
                      <Container />
                  </CardText>
              </Card>
          </div>
        )

    }
}




