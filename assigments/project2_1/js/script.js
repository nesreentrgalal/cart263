"use strict";

/********************************************************************

Automated text generator//content generator
I was inspired to do this idea when I read this in the article
when the author talked about "pressing contemporary issues such as racial and gender bias in big data and machine intelligence-driven systems"
The T-shirts he mentioned that were sold on Amazon using an unchecked list of verbs and pronouns with an online image generator,
like “Keep Calm and Rape A Lot” tshirts and “Keep Calm and Hit Her”.
I decided to use a gibberish random text online generator https://randomtextgenerator.com/, and he was right.
Most of words targeted towards women is marriage, and "his joy of sex ", "mistress", "fail lady", "Ladies bed wisdom theirs men months set.""
"Age attended betrayed her man", they all show sexism towards women and negative connotation. It shows the negrative gender bias that the
author was explaining.

Project inspired by project 1 and itisasifyouweremakinglove by Pippin
I got help from these websites to achieve this project:
windows 95 settings code // desktop navigation and time thanks to  https://www.codeseek.co/ddietle/windows-95-css-amp-jquery-flavor-zBjpVE
login form windows 95 thanks to  https://www.cssscript.com/windows-95-theme-bootstrap/
*********************************************************************/

$(document).ready(setup);

// Constants to determine how long after dismissing a dialog we should
// add a new one to the page
const MIN_LETTER_DELAY_TIME = 500;
const MAX_LETTER_DELAY_TIME = 1500;
//variable when the mouse moves and to track the mouse movement for the pop up dialog/letter to initiate
const MAX_MOUSE_MOVES = 100;
let mouseMoves = 0;
//windows 95 error sound, sounds work once you click on the the web page
let dialogSound = new Audio("assets/sounds/WINDOWS_ERROR SOUND.mp3"); //https://www.youtube.com/watch?v=iqztd7uMvVI

let $texts;

function setup() {
  //responsive voices of hastags being ironic and contradicting the text
  responsiveVoice.speak("#unbais, #safe #peace #ungenerated #unbais #truth #real", "UK English Male", {
    rate: 1,
    volume: 1
  });
}

//gender biased text generator
let texts = [
  "But why smiling man her imagine married.",
  "Shyness mention married son she his started now. ",
  " Begin sex was power, his joy after had walls miles. ",
  "Off now mistress provided out horrible opinions.",
  "Ladies bed wisdom theirs men months set.",
  "Age attended betrayed her man raptures laughter.",
  "Devonshire sir sex motionless travelling six themselves.",
  "Shewing met parties gravity husband sex pleased.",
  "Improve ashamed married expense bed her comfort pursuit mrs.",
  "Four time took ye your as fail lady.",
  "She suspicion dejection saw instantly.",
  "That know ask case sex ham dear her spot",
  "Son share three men power boy you",
  "She wholly fat who window extent either formal.",
  "That know ask case sex ham dear her spot."
];




//when when you move the mouse, it triggers the mousemoved function
$(document).on("mousemove", mouseMoved);

// when mouse moves, add a dialog
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
//Add letter
function addLetter() {
  //the dialog is the dialog id
  let $dialog = $("#Dialog");
  //
  $("#Dialog")
    .parent()
    .css({
      //background: "url(assets/images/letter.png)" //https://i.pinimg.com/originals/4c/65/f9/4c65f913798dcd566fb929d0973a37e6.jpg
    });
  // Choose a random letter from the array
  let text = texts[Math.floor(randomInRange(0, texts.length))];

  // format the letter as a p which is paragraph and to add letters to the dialog id
  $("#Dialog").html(`<p>${text}</p>`);
  // transform the dialog into the dialog widget
  $("#Dialog").dialog({
    width: '310px',
    height: 'auto',
    modal: true,
    //button to close the dialog and opacity of wrapper effect, it fades out
    buttons: {
      Close: function() {
        $(this).dialog(`close`);
        // opacity to change once you click send and call FadeIn to return back the opacity to normal
      //  $("body").fadeTo("fast", 0.3, fadeIn);
      }
    },
    // The 'close' option lets us specify a function to call when the dialog is closed
    close: closeDialog,

    // The 'containment' option lets us specify where the dialog can go on the screen. 'body' means it will be
    // contained within the body tag, and can't be dragged out of it.
    containment: "body"
  });

  // use .offset() on the .parent() of the dialog in order to give it a random position on the screen.
  // Uses .height() and .width() to get the dimensions of elements, including the window.
  $("#Dialog")
    .parent()
    .offset({
      top: Math.random() * ($(window).height() - $dialog.parent().height()),
      left: Math.random() * ($(window).width() - $dialog.parent().width())
    });
}

// closeDialog()
// Closes the dialog and sets a timer to open a new one
function closeDialog() {
  //sound effect for send
  dialogSound.currentTime = 0;
  dialogSound.play();
  // After closing a dialog, a new comes up between the min delay time and max delay time
  let delay = randomInRange(MIN_LETTER_DELAY_TIME, MAX_LETTER_DELAY_TIME);
  // Set a timeout and add a new dialog after the delay. Dismiss a dialog, and you just get another one back
  setTimeout(addLetter, delay);
}
//fadeIn function to return to normal opacity
//function fadeIn() {
  //$("body").fadeTo("fast", 1);
//}
// randomInRange()
// Returns a random number between min and max
function randomInRange(min, max) {
  return min + Math.random() * (max - min);
}

$(document).ready(function() {
  //activate the start time function for the time to show in the bar thanks to https://www.codeseek.co/ddietle/windows-95-css-amp-jquery-flavor-zBjpVE
  startTime();
//start navbar
  $('#start').click(function() {
    $('#startMenu').toggle();
    $(this).toggleClass('startClick');
  });
});

//code for the time to work in the navbar thanks to https://www.codeseek.co/ddietle/windows-95-css-amp-jquery-flavor-zBjpVE
function startTime() {
  var today = new Date();
  // to get hrs, mintues and seconds depending on the day and date
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  var hd = h;
  $('#clock').html((hd = 0 ? "12" : hd > 12 ? hd - 12 : hd) + ":" + m + " " + (h < 12 ? "AM" : "PM"));
  t = setTimeout(function() {
    startTime()
  }, 500);
}
// add a zero in front of numbers<10
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
