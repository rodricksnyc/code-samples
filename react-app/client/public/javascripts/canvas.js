// document.addEventListener("DOMContentLoaded", function() {
//   console.log('the fucking document is ready bitch!');
//
// context = document.querySelector('#drawingCanvas').getContext("2d");
//
// //define the canvas
// let canvas = document.querySelector('#drawingCanvas');
//
// //global mousedown variable for when the mouse is pressed
// let mouseDown = false;
//
// canvas.addEventListener('mousedown', function(event) {
//   mouseDown = true;
//   console.log(mouseDown);
// })
// canvas.addEventListener('mouseup', function(event) {
//   mouseDown = false;
//   console.log(mouseDown);
// })
//
// const sizes = {
//   smallBrush: 5,
//   mediumBrush: 10,
//   largeBrush: 20
// }
//
// let brushSize = 5;
// // let color = 'teal';
//
//
//
// // document.getElementsByClassName('brushSizes').click(function(event) {
// //   var sizes = getElementByClassName('brushSizes');
// //   var sizeName = sizes.attr('id')
// //
// //   brushSize = sizes[sizeName]
// //   console.log(sizeName)
// // })
//
// $(document).ready(function() {
//   $('.brushSizes').click(function(event) {
//     const sizeName = $(this).attr('id');
//
//     brushSize = sizes[sizeName]
//     console.log(sizeName)
//   })
//
//
// })
//
// canvas.addEventListener('mousemove', function(event){
//
//     function getPosition(element) {
//       let xPos = element.offsetLeft;
//       let yPos = element.offsetTop;
//       return { xPos, yPos }
//       console.log( xPos, yPos )
//     }
//
//   getPosition(canvas);
//    console.log('><><<')
//   if (mouseDown === true) {
//
//     let mouseX = event.offsetX;
//     let mouseY = event.offsetY;
//
//     console.log(mouseX);
//
//     context.fillStyle = color;
//
//     context.fillRect(
//       mouseX - (brushSize/2),
//       mouseY - (brushSize/2),
//       brushSize,
//       brushSize
//     )
//   }
// });
//
//
// let color = document.querySelector("input[name='color']").value;
//
// //colorPicker to set the value of fillstyle.
// let colorPicker = document.querySelector("form[name='colorPicker']");
//   colorPicker.addEventListener('change', function(event){
//   event.preventDefault();
//   let colorField = document.querySelector("input[name='color']")
//   //console.log(color.value);
//   color = colorField.value;
// })
//
// });
