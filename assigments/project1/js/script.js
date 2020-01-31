"use strict";

/********************************************************************

Van Gogh's eternal soul
Nesreen Galal

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

//dialog box will pop out after 2 seconds
const DIALOG_TIME = 2000;
//audio typewriter key
let typeWriter = new Audio("assets/sounds/typewriter.wav");


function setup() {

   $('#letter').dialog();
  ;

  $('#wrapper').tubular({
    // The plugin takes various options, but in this case we'll just give it
    // the video ID of the YouTube video we want.
    videoId: 't6NCcZH2Y6w?iv_load_policy=30s'


  });




}

let letters =  [
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

const MAX_MOUSE_MOVES = 20;
let mouseMoves = 0;

  $letters = $('#letter');
