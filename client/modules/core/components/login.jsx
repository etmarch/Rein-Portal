import React from 'react';

import dataComposer from '../containers/login.js';
import Component from './login_form.jsx';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';


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




