import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { app } from '../../base.js';

class Logout extends Component {
  constructor() {
    super()
   this.state = {
     redirect: false
   }
 }
componentWillMount() {
  app.auth().signOut().then((user) => {
    this.setState({  redirect: true })

  })

}

render() {
  if (this.state.redirect === true) {
    return <Redirect to="/" />
}
 return (
   <p>Logging Out</p>
 )

}

}

export default Logout;
