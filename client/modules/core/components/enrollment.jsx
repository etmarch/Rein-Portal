import React from 'react';

class Enrollment extends React.Component {
  render() {
    //const {error} = this.props;
    return (
        <div className="new-post">
          <h2>Set your password to complete registration</h2>
          {/*error ? <p style={{color: 'red'}}>{error}</p> : null*/}

          <input ref="passwordRef" type="Password" placeholder="Enter your new Password."/> <br/>
          <button onClick={this.createPost.bind(this)}>Add New</button>
        </div>
    );
  }

  createPost() {
    const { passwordRef } = this.refs;
    console.log(passwordRef.value);
    Accounts.resetPassword(FlowRouter.getParam('token'), passwordRef.value, err => {
      if(err) {
        //this.setState({invalid: false, error: true});
        console.log(err);
      } else {
        FlowRouter.go("/");
      }
    });
  }
}

export default Enrollment;