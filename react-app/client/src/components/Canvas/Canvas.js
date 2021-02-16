import React from "react";
import "./Canvas.css";
// import "./othercanvas.js";
// import "../../../public/javascripts/redrawCanvas.js";
// import "./saveImage.js";

class Canvas extends React.Component {
  componentDidMount() {
    var that = this;
    let context;
    let dammit = setInterval(() => {
      if(this.props.selectedDrawing){
        console.log(this.props.selectedDrawing)
        let base_image = new Image();
        base_image.src = this.props.selectedDrawing.image;
        context = document.querySelector('#drawingCanvas').getContext("2d");
        base_image.onload = function(){
          context.drawImage(base_image, 0, 0);
        }
        clearInterval(dammit)
      }
    }, 3000)

    setTimeout(() => {
      if(!this.props.selectedDrawing){
        context = document.querySelector('#drawingCanvas').getContext("2d");
      }
    },3000)

    //define the canvas
    let canvas = document.querySelector('#drawingCanvas');

    //global mousedown variable for when the mouse is pressed
    let mouseDown = false;

    canvas.addEventListener('mousedown', function(event) {
      mouseDown = true;
      console.log(mouseDown);
    })

    canvas.addEventListener('mouseup', function(event) {
      mouseDown = false;
      console.log(mouseDown);
    })

    canvas.addEventListener('mousemove', function(event){
      const brushSize = that.props.brushSize;
        function getPosition(element) {
          let xPos = element.offsetLeft;
          let yPos = element.offsetTop;
          return { xPos, yPos }
          console.log( xPos, yPos )
        }

      getPosition(canvas);
      if (mouseDown === true) {

        let mouseX = event.offsetX;
        let mouseY = event.offsetY;

        console.log(mouseX);

        context.fillStyle = that.props.color;

        context.fillRect(
          mouseX - (brushSize/2),
          mouseY - (brushSize/2),
          brushSize,
          brushSize
        )
      }
    });
  }

  render() {
    return <canvas id="drawingCanvas" width="800" height="600" name="canvas"></canvas>;
  }
};

export default Canvas;
