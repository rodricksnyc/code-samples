import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import "./Login.css";
// import { Link } from 'react-router-dom';
// import { Toaster, Intent } from '@blueprintjs/core';

import { app } from '../../base.js';


class Login extends Component {
  constructor(props) {
    super(props)
    this.authWithEmail = this.authWithEmail.bind(this)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
    this.state = {
      redirect: false

    }
  }

  authWithEmail() {
    console.log("auth with email")
  }


  authWithEmailPassword(event) {
    const { history } = this.props;

    event.preventDefault()

    const email = this.emailInput.value
    const password = this.passwordInput.value

    app.auth().fetchProvidersForEmail(email)
      .then((providers) => {
        if(providers.length === 0) {
          //create user
          return app.auth().createUserWithEmailAndPassword(email, password)
        } else if (providers.indexOf("password") === -1) {
          //they used fb
          this.loginForm.reset()
        } else {
          //they are signed in
          return app.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then((user) => {
        if (user) {
          this.loginForm.reset()
          history.push('/')
        }
      })
      .catch(e => {
        console.log(e);
      })

    console.log("auth with password")
    console.table([{
        email: this.emailInput.value,
        password: this.passwordInput.value
    }])
  }

render() {

return (

<div className="centerItems">
{/*<button style={{width:"20%"}} className="pt-button pt-intent-primary"
}onClick={() => {this.authWithEmail()}}>
Login with Email
</button>*/}
<img style={{width:"50%", height:"50%"}} src="/img/paint.png" />




<form
  onSubmit={(event) => {
    this.authWithEmailPassword(event)
  }}
  ref={(form) => { this.loginForm = form } }
>
<div style={{marginLeft: "0px"}} className="pinkDiv">
<h5 style={{fontSize: "26px"}}>*If you don't have an account already,</h5>
<h5 style={{fontSize: "26px"}}>please create an account below</h5>

<label className="pt-label"><input className="pt-input" name="email"
type="email" ref={(input) => { this.emailInput = input}} placeholder="Email"></input>
</label>
<br/>
<label className="pt-label"><input className="pt-input" name="password"
type="password" ref={(input) => { this.passwordInput = input}} placeholder="Password"></input>
</label>
<br/>
<input style={{width: "30%", backgroundColor:"#FF88BE"}} type="submit" className="pt-button pt-intent-primary" value="Login"></input>
</div>

</form>




</div>







);

};

}


export default withRouter(Login);
