// https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
"use strict";

window.onload = setup;

function setup(){
 console.log("this better work...")
 for (let i = 0; i < 1000; i++) {
    let pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    document.body.appendChild(pixel);
    pixel.addEventListener("mouseover",paint);

  }
}
function paint(e){
  let pixel = e.target;
  pixel.style.backgroundColor = RandomColor()
  setTimeout(resetPixel,1000,pixel);
}


function resetPixel(pixel){
  pixel.style.backgroundColor = "black";
}

function RandomColor(){
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
