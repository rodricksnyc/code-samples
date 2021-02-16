import React, { Component } from "react";
import Button from "../components/Button";
import Canvas from "../components/Canvas";
import { Col, Row, Container } from "../components/Grid";
// import Form from "../../components/Form";
import { Link } from 'react-router-dom'

import API from '../utils/API';


class Login extends Component {
  constructor(props) {
    super(props)
    this.authWithEmail = this.authWithEmail.bind(this)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
  }

  authWithEmail() {
    console.log("auth with email")
  }

  authWithEmailPassword(event) {
    event.preventDefault()
    console.log("auth with password")
    console.table([{
        email: this.emailInput.value,
        password: this.passwordInput.value
    }])
  }

render() {

return (

<div className="centerItems">
<button style={{width:"20%"}} className="pt-button pt-intent-primary"
onClick={() => {this.authWithEmail()}}>
Login with Email
</button>
<hr style={{marginTop:"10px", marginBottom:"10px"}}/>



<form
  onSubmit={(event) => {
    this.authWithEmailPassword(event)
  }}
  ref={(form) => { this.loginForm = form } }
>
<div style={{marginBottom:"10px"}} className="pt-callout pt-icon-info-sign">
<h5>*If you don't have an account already,</h5>
<h5>please create an account below.</h5>
</div>
<label className="pt-label"><input style={{width: "100%"}} className="pt-input" name="email"
type="email" ref={(input) => { this.emailInput = input}} placeholder="Email"></input>
</label>
<br/>
<label className="pt-label"><input style={{width: "100%"}} className="pt-input" name="password"
type="password" ref={(input) => { this.passwordInput = input}} placeholder="Password"></input>
</label>
<br/>
<input style={{width: "15%"}} type="submit" className="pt-button pt-intent-primary" value="Login"></input>


</form>




</div>







);

};

}


export default Login;
