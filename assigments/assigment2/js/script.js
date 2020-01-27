"use strict";

/*****************

Raving Redactionist
Pippin Barr

You are redacting a document, but it keeps becoming unredacted!
Click the secret information to hide it, don't let all the
secrets become revealed!

Assigment 2
modified by Nesreen Galal
******************/
// When the document is loaded we call the setup function
$(document).ready(setup)


// The chance a span will be revealed per update
const REVEAL_POSSIBILITY = 0.1;
// How often to update the spans (potentially revealing them)
const UPDATE_FREQUENCY = 500;

// A place to store the jQuery selection of all spans
let $spans;
//variables for secrets found and total 
let secretsFound = 0;
let secretsTotal = 3;



// setup()
//
// Sets the click handler and starts the time loop
function setup() {
  // Save the selection of all spans (since we do stuff to them multiple times)
  $spans = $('span');
  // Set a click handler on the spans (so we know when they're clicked)
  $spans.on('click', spanClicked);
  // Set an interval of 500 milliseconds to update the state of the page
  setInterval(update, UPDATE_FREQUENCY);
  // calculate the total of secrets
  secretsTotal = $('.secret').length;
  //event handler
  // Adding an event for mouseover() to all secrets class  and calls out the exposedsecret function
  $('.secret').on('mouseover', exposedSecret);
  // Set the score display text
  $('#scoreDisplay').text("You found " + secretsFound + " out of " + secretsTotal + " secrets");
};

// spanClicked()
//
// When a span is clicked we remove its revealed class and add the redacted class
// thus blacking it out
function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

// update()
//
// Update is called every 500 milliseconds and it updates all the spans on the page
// using jQuery's each() function which calls the specified function on _each_ of the
// elements in the selection
function update() {
  $spans.each(updateSpan);
}

// updateSpan()
//
// With random chance it unblanks the current span by removing the
// redacted class and adding the revealed class. Because this function is called
// by each(), "this" refers to the current element that each has selected.
function updateSpan() {
  let r = Math.random();
  if (r < REVEAL_POSSIBILITY) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

function exposedSecret() {
  // Adding the "Found" css so that we can see it hightlighted
  $(this).addClass('found');
  // Removing the mouseover element from the found element
  $(this).off('mouseover');
  // Increasing the counter variable by 1
  secretsFound += 1;
  //so that the text updates since the counter variable is increased by 1
  $('#scoreDisplay').text("You found " + secretsFound + " out of " + secretsTotal + " secrets")
}
