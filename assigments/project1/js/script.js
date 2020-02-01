"use strict";

/********************************************************************

Van Gogh's eternal soul
Nesreen Galal

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

//dialog box will pop out after 2 seconds
const INITIAL_DIALOG_DELAY = 2000;
// Constants to determine how long after dismissing a dialog we should
// add a new one to the page
const MIN_DIALOG_DELAY_TIME = 2000;
const MAX_DIALOG_DELAY_TIME = 20000;
//maximum of how much a mouse moves
const MAX_MOUSE_MOVES = 5;
//variable when the mouse moves
let mouseMoves = 0;
//audio typewriter key
let typeWriter = new Audio("assets/sounds/typewriter.wav");
let $letters;


function setup() {

   $('#letter').dialog();
  ;

  $('#wrapper').tubular({
    // The plugin takes various options, but in this case we'll just give it
    // the video ID of the YouTube video we want.
    videoId: 't6NCcZH2Y6w?iv_load_policy=30s'
});

$(document).on('mousemove', mouseMoved);
}


  let letters = [
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

//$letters = $('#letter');

function mouseMoved() {
  // Increase the number of tracked moves
  mouseMoves++;
  // Check if they exceed the maximum
  if (mouseMoves > MAX_MOUSE_MOVES) {

    // If so, add a dialog
    addDialog();
    // And reset the counter
    mouseMoves = 0;
  }
}


function addDialog() {
  // Play the new dialog sound effect
  typeWriter.currentTime = 0;
  typeWriter.play();


  //make the dialog into a div with the title "To Theo"
  let $dialog = $(`<div></div>`).attr(`title`, `To Theo`);
   $dialog.attr("src", "assets/images/clown.png");
  // Choose a random letter from the array
  let letter = letters[Math.floor(randomInRange(0, letters.length))];

// format the letter as a p which is paragraph and to add letters insead of the dialog div using append
  $dialog.append(`<p>${letter}</p>`);
  //show the div on the page and insert it in the body
  $('body').append($dialog);

  // transform the dialog into the dialog widget
  $dialog.dialog({
    //button to close the dialog
    buttons: {
      "Send": function() {
        $(this).dialog(`close`);
      },

    },
    // The 'close' option lets us specify a function to call when the dialog is closed
    close: closeDialog,
    // The 'containment' option lets us specify where the dialog can go on the screen. 'body' means it will be
    // contained within the body tag, and can't be dragged out of it.
    containment: 'body'
  });

  $('div').css({
      fontFamily: 'Courier',
      backgroundColor: 'blue',
      //opacity: '0.3',
});

 $('div').fadeTo("slow", 0.50);
  // Finally, use .offset() on the .parent() of the dialog in order to give it a random position on the screen.
  // Uses .height() and .width() to get the dimensions of elements, including the window.
  $dialog.parent().offset({
    top: Math.random() * ($(window).height() - $dialog.parent().height()),
    left: Math.random() * ($(window).width() - $dialog.parent().width())
  });
}

// closeDialog()
//
// Closes the dialog with a sound effect and sets a timer to open a new one
function closeDialog() {
  // Play the dismissal sound, ding!
  typeWriter.currentTime = 0;
  typeWriter.play();
  // Choose a random delay time (in ms)
  let delay = randomInRange(MIN_DIALOG_DELAY_TIME, MAX_DIALOG_DELAY_TIME);
  // Set a timeout and add a new dialog after the delay. Dismiss a dialog, and you just get another one back
  setTimeout(addDialog, delay);
}

// randomInRange()
//
// Returns a random number between min and max
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}
