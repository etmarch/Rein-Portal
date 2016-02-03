import React from 'react';
import Formsy from 'formsy-react';
const FMUI = require('formsy-material-ui');
const { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;

export default React.createClass({

    resetForm() {
        this.refs.form.reset();
    },

    validSubmit(data) {
        // console.log('validSubmit', data);
        this.props.submitAction(data.email, data.password);
    },

    // invalidSubmit(data) {
    invalidSubmit() {
        // console.log('invalidSubmit', data);
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

          <Formsy.Form className="login-form"
                       onValidSubmit={this.validSubmit}
                       onInvalidSubmit={this.invalidSubmit}
                       onValid={this.enableButton}
                       onInvalid={this.disableButton}
                       onChange={this.onChange}
                       ref="form">

              <fieldset>
                  {error ?
                    <div className="alert alert-danger" onClick="">
                        <span className="octicon octicon-megaphone" ></span>
                        {error}
                    </div> : null }

                  <FormsyText
                    {...sharedProps}
                    name="email"
                    value=""
                    label="Email"
                    type="email"
                    placeholder="This is an email input."

                    autoComplete="off"

                    validations="isEmail"
                    validationError="Please provide a valid email address."

                  />
                  <FormsyText
                    {...sharedProps}
                    name="password"
                    value=""
                    label="Password"
                    type="password"
                    placeholder="Type in your password"

                    validations="minLength:4"
                    validationError="That password looks a bit short, try again"

                  />

              </fieldset>


                  <input className="btn btn-primary block full-width m-b"
                         formNoValidate={true}
                         disabled={!this.state.canSubmit}
                         type="submit" defaultValue="Login" />


          </Formsy.Form>

        );
    }
});
