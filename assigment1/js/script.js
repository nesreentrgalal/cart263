// https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
//this code helped me figure out generating random colour by converting colours to hexadecimal

"use strict";
//global variable
let rotation = 0;
window.onload = setup;
//creating pixels
function setup() {
  console.log("this better work...")
  for (let i = 0; i < 1000; i++) {
    let pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    document.body.appendChild(pixel);
    pixel.addEventListener("mouseover", paint);

  }
}
//event listener
function paint(e) {
  let pixel = e.target;
  pixel.style.backgroundColor = RandomColor()
  setTimeout(resetPixel, 1000, pixel);
}
//keydown which is the spacebar to rotate
document.addEventListener('keydown', rotate);
// rotate()) will be called every time space key is pressed down
function rotate(e) {
  // so that all pixels are affected
  let pixels = document.getElementsByClassName('pixel');
  //if the keycode is 32 which is the right arrow key..rotate clockwise
  if (e.keyCode === 39) {
    rotation = rotation + 1;
  }
  //when left arrow is clicked... rotate counter clockwise
  else if (e.keyCode === 37) {
    rotation = rotation - 1;
  }
  //an array so that all pixels are affected
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.transform = `rotate(${rotation}deg)`;
  }
}
// colour goes back to black
function resetPixel(pixel) {
  pixel.style.backgroundColor = "black";
}
//random colour by using hexcode...thanks for the website of the website above.
//easier way to change colour in one line of code.
function RandomColor(pixel) {
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
  //random color will be activated
}
