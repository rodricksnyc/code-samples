import React, { Component } from "react";
import Button from "../components/Button";
import Canvas from "../components/Canvas";
import { Col, Row, Container } from "../components/Grid";
// import Form from "../../components/Form";
import { Link } from 'react-router-dom'

import API from '../utils/API';



class Index extends Component {

render() {

return (

<nav className="pt-navbar">
 <div className="pt-navbar-group pt-align-left">
   <div className="pt-navbar-heading"><p>Pixel Art App</p></div>
    {this.props.authenticated
      ? <input className="pt-input" placeholder="View Drawings..." type="text"/>
      : null

    }
    </div>

    {this.props.authenticated
      ? (

        <div className="pt-navbar-group pt-align-right">
        {/*<Link className="pt-button pt-minimal pt-icon" to="/drawings"></Link>*/}
        <a href={"/drawings/"}>
        <strong>
        <p>My Pixel App</p>
        </strong>
        </a>

  </div>
      )
      : (
    <div className="pt-navbar-group pt-align-center">
    {/*<Link className="pt-button pt-intent-primary" to="/login">Log In</Link>*/}
        <a href={"/login/"}>
        <strong>
        <p>Please Login</p>
        </strong>
        </a>
    </div>
    )

  }
  </nav>
);

};

}


export default Index;
