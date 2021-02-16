import React, { Component } from "react";
// import Button from "../../components/Button";
import Canvas from "../components/Canvas";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
// import Form from "../../components/Form";
import API from '../utils/API'

class New extends Component {
  state = {
    color: 'blue',
    brushSize: 14,
    drawings: []
  }

  handleFormSubmit = event => {
    event.preventDefault()
		const newDrawing = {
			title: this.state.title,
			image: document.getElementById('drawingCanvas').toDataURL()
		}

		API.saveDrawing(newDrawing)
			.then(res => {
				this.setState({
					title: "",
					image: ""
				})

				this.loadDrawings()
			})
			.catch(e => {
				console.log(e);
			})
	}
  loadDrawings = () => {
    API.getDrawings().then((response) => {
      this.setState({
        drawings: response.data
      })
    }).catch(err => console.log(err));
  };

  render() {

    // const sizes = {
    //   smallBrush: 5,
    //   mediumBrush: 10,
    //   largeBrush: 20
    // }


    return (
      <Container>
          <Row>
            <Jumbotron addClass="header">
          	<h1 style={{color:"black"}}>My Pixel App	<i class="fas fa-paint-brush"></i></h1>
            <a href={"/drawings/"}>
            <strong>
            <p style={{fontSize:"34px"}}>
             Back to My Drawings</p>
            </strong>
            </a>
            </Jumbotron>
          <Col size="lg-10 md-12 sm-12 xs-12">
              <Canvas color={this.state.color} brushSize={this.state.brushSize} />
          </Col>

      	<Col size="lg-2 md-2 sm-4 xs-6">
        <p  className="tool" style={{fontSize:"52px", color:"black"}}>Tools</p>
        <p style={{fontSize:"30px", color:"black"}}>Color</p>
        <input type="color" name="color" className="colorSelector"
          onChange={e => {
            this.setState({color: e.target.value})
          }}
        />
          </Col>
          <Col size="lg-2 md-2 sm-4 xs-6">
        <p style={{fontSize:"30px", color:'black'}}>Brush Size</p>
        <button style={{width:"140px", background:'#ff66ff', color:'black', borderRadius:'5px', fontSize:"24px", fontFamily: 'Permanent Marker', marginBottom:'10px'}} onClick={() => this.setState({brushSize: 5})}>Small</button>
        <br/>
        <button style={{width:"140px", background:"#ffb3d9", color:'black', borderRadius:'5px', fontSize:"24px", fontFamily: 'Permanent Marker', marginBottom:'10px'}} onClick={() => this.setState({brushSize: 10})}>Medium</button>
        <br/>
        <button style={{width:"140px", background:'#ff6699', color:'black', borderRadius:'5px', fontSize:"24px", fontFamily: 'Permanent Marker', marginBottom:'10px'}} onClick={() => this.setState({brushSize: 25})}>Large</button>
        <br/><br/>
        <button style={{width:"140px", background:'#ff99cc', color:'black', borderRadius:'5px', fontSize:"24px", fontFamily: 'Permanent Marker', marginBottom:'10px'}} onClick={this.handleFormSubmit}>Save Drawing</button>
        </Col>
        </Row>

      </Container>
    )
  }
}

export default New;
