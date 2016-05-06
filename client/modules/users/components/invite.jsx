import React from 'react';
import Card from '../../../../node_modules/material-ui/lib/card/card';
import dataComposer from '../containers/invite.js';
import Component from './invite_form.jsx';
import Divider from 'material-ui/lib/divider';

const Container = dataComposer( Component );

class Invite extends React.Component {

  render() {
    let loginStyle = {
      padding: 20
    };
    return (
        <div className="row center-xs">
          <div className="col-xs-6">
            <div className="box">
              <Card className="centered" style={loginStyle}>
                <h3>Add Client</h3>
                <Divider />
                <br />
                <Container />
              </Card>
            </div>
          </div>
        </div>
    )
  }
}

export default Invite;