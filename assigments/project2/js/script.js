"use strict";

/********************************************************************
Generated Contect: Fake vs Reality? What is Reality
Nesreen Galal
This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

Project inspired by project 1 and itisasifyouweremakinglove by Pippin

*********************************************************************/
const DELAY_TIME = 1500;
const FADE_TIME = 1500;

createTextInputDialog();
let dialogSound = new Audio("assets/sounds/WINDOWS_ERROR SOUND.mp3"); https://www.youtube.com/watch?v=iqztd7uMvVI

$(document).ready(setup);


function setup() {

}

let contentText = [
  "This sadness will last forever...",
  "I dream my painting and I paint my dream.",
  "There is nothing more truly artistic than to love people.",
  "I don't know anything with certainty, but seeing the stars makes me dream",
  "If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced.",
  "I put my heart and soul into my work, and I have lost my mind in the process.",
  "Art is to console those who are broken by life",
  "I want to touch people with my art. I want them to say 'he feels deeply, he feels tenderly.",
  "La tristesse durera toujours.",
  "I wish they would take me as I am",
  "Someday death will take us to another star",
  "The sunflower is mine, in a way",
  "The only time I feel alive is when I'm painting",
  "I can't change the fact that my paintings don't sell. But the time will come when people will recognize that they are worth more than the value of the paints used in the picture",
  "It is a pity that, as one gradually gains experience, one loses one's youth."
];



//create dialog
function createTextInputDialog() {
 dialogSound.currentTime = 0;
 dialogSound.play();

  $textGenerated = $('<div id="text-input"></div>');
  //$textGenerated.append('<p id="text-input-request"></p>');
  //$textGenerated.append('<input id="text-input-field"></input>');
  let content = contentText[Math.floor(randomInRange(0, contentText.length))];
  $textGenerated.dialog({
    title: 'generated content',
    width: '310px',
    height: 'auto',
    position: { my: "center", at: "center", of: window },
    resizable: false,
    draggable: false,
    autoOpen: false,
    modal: true,
    buttons: {
      Submit: function () {
        setTimeout(function () {
          $textGenerated.dialog('close');
        },300);
      }
  });
}
