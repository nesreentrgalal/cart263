"use strict";

/********************************************************************

Van Gogh's eternal soul
Nesreen Galal

Credit to pippin's projects
https://pippinbarr.github.io/cart263-2020/examples/jqueryui/endless-dialogs/
https://pippinbarr.github.io/cart263-2020/examples/jqueryui/beach-party/
dialog to image
https://stackoverflow.com/questions/4452099/display-images-with-jquery-ui-dialog-widget-like-in-fancybox
revert
http://jsfiddle.net/yTMwu/35/

Modified by Me
*********************************************************************/

$(document).ready(setup);


// Constants to determine how long after dismissing a dialog we should
// add a new one to the page
const MIN_LETTER_DELAY_TIME = 10000;
const MAX_LETTER_DELAY_TIME = 20000;
//variable when the mouse moves and to track the mouse movement for the pop up dialog aka letter to happen
const MAX_MOUSE_MOVES = 30;
let mouseMoves = 0;
//audio typewriter key, sounds work once you click on the the web page
let typeWriter = new Audio("assets/sounds/typewriter.wav");
let $letters;

function setup() {

  $('.wrapper').tubular({
    // The plugin takes various options, but in this case we'll just give it
    // the video ID of the YouTube video we want.
    videoId: 't6NCcZH2Y6w?iv_load_policy=30s'
  });
}

//letters written by vincent van gogh to theo, his brother

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

//when when you move the mouse, it triggers the mousemoved function
$(document).on('mousemove', mouseMoved);

// when mouse moves, add a letter
function mouseMoved() {
  // Increase the number of tracked moves
  mouseMoves = mouseMoves + 1;
  // Check if the mouse exceeds 5
  if (mouseMoves > MAX_MOUSE_MOVES) {
    // If so, add a dialog
    addLetter();
    // And reset the counter
    mouseMoves = 0;
  }
}
//
function addLetter() {
  // Play the new dialog sound effect
  typeWriter.currentTime = 0;
  typeWriter.play();


  //make the dialog into a div with the title "To Theo"
  let $dialog = $('#Dialog');
  //background image of dialog
  $('#Dialog').parent().css({
    background: 'url(assets/images/letter.png)'
  })
  // Choose a random letter from the array
  let letter = letters[Math.floor(randomInRange(0, letters.length))];

  // format the letter as a p which is paragraph and to add letters insead of the dialog div using append
  $('#Dialog').html(`<p>${letter}</p>`);

  //show the div on the page and insert it in the body
  $('body').append('#Dialog');

  // transform the dialog into the dialog widget
  $('#Dialog').dialog({
    //button to close the dialog and opacity of wrapper effect, it fades out
    buttons: {
      "Send": function() {
        $(this).dialog(`close`);
        // opacity to
        $('body').fadeTo("slow", 0.50);
        $('body').fadeOut("slow", 10);
      },

    },
    // The 'close' option lets us specify a function to call when the dialog is closed
    close: closeDialog,

    // The 'containment' option lets us specify where the dialog can go on the screen. 'body' means it will be
    // contained within the body tag, and can't be dragged out of it.
    containment: 'body'
  });


  // use .offset() on the .parent() of the dialog in order to give it a random position on the screen.
  // Uses .height() and .width() to get the dimensions of elements, including the window.
  $('#Dialog').parent().offset({
    top: Math.random() * ($(window).height() - $dialog.parent().height()),
    left: Math.random() * ($(window).width() - $dialog.parent().width())
  });
}

// closeDialog()
// Closes the dialog and sets a timer to open a new one
function closeDialog() {
  // After closing a dialog, a new comes up between the min delay time and max delay time
  let delay = randomInRange(MIN_LETTER_DELAY_TIME, MAX_LETTER_DELAY_TIME);
  // Set a timeout and add a new dialog after the delay. Dismiss a dialog, and you just get another one back
  setTimeout(addLetter, delay);
}

// randomInRange()
//
// Returns a random number between min and max
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}
