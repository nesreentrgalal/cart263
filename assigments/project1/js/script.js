"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

const ANIMATION_TIME = 5000;


function setup() {

   $( ".square" ).draggable({ axis: "x"});
   $('.square').animate({
     backgroundColor: 'green'

   },ANIMATION_TIME);

   $( ".square" ).resizable();
   $('#question').dialog();
  ;

  $('#wrapper').tubular({
    // The plugin takes various options, but in this case we'll just give it
    // the video ID of the YouTube video we want.
    videoId: 't6NCcZH2Y6w?iv_load_policy=30s'
  });

}
