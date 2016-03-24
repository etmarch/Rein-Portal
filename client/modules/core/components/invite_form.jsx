import React from 'react';
import Formsy from 'formsy-react';
const FMUI = require('formsy-material-ui');
import RaisedButton from 'material-ui/lib/raised-button';
const { FormsyText } = FMUI;

export default React.createClass({

  resetForm() {
    this.refs.form.reset();
  },

  validSubmit(data) {
    // console.log('validSubmit', data);
    this.props.submitAction(data.email);
  },

  // invalidSubmit(data) {
  invalidSubmit() {
    console.log('invalidSubmit', data);
  },

  enableButton() {
    // console.log('enable button');
    this.setState({ canSubmit: true });
  },

  disableButton() {
    // console.log('disable button');
    this.setState({ canSubmit: false });
  },

  getInitialState() {
    return {
      validatePristine: true,
      disabled: false,
      canSubmit: false
    };
  },

  render() {

    var sharedProps = {
      validatePristine: this.state.validatePristine,
      disabled: this.state.disabled
    };

    const {error} = this.props;

    return (

        <Formsy.Form className="login-form centered"
                     onValidSubmit={this.validSubmit}
                     onInvalidSubmit={this.invalidSubmit}
                     onValid={this.enableButton}
                     onInvalid={this.disableButton}
                     onChange={this.onChange}
                     ref="form">


          {error ?
              <div className="alert alert-danger" onClick="">
                <span className="octicon octicon-megaphone" ></span>
                {error}
              </div> : null }

          <FormsyText
              {...sharedProps}
              name="email"
              value=""
              label="Client Email Address"
              type="email"
              placeholder="Input Client's Email Address."
              autoComplete="off"
              validations="isEmail"
              validationError="Please provide a valid email address."

          />

          <br />

          <RaisedButton className="invite-btn"
                 formNoValidate={true}
                 disabled={!this.state.canSubmit}
                 type="submit"
                 defaultValue="Invite"
                 label="submit"
                 primary={true}
          />


        </Formsy.Form>

    );
  }
});
