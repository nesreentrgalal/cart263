/********************************************************************
Nesreen Galal
Assignment 4: Condiments Cacophony
Original code by Pippin Barr
*********************************************************************/

$(document).ready(function() {

  // The first thing we need to do is load the data we're going
  // to use to get random words.
  //
  // For that we use jQuery's .getJSON() function, which we give
  // the location of the file, and a function to call when the data
  // is available...
  $.getJSON('data/data.json')
    .done(gotData)
    .fail(dataError);
  $(document).one("click", mousePressed);
});


// gotData (data)
//
// This function gets called by getJSON when the data has been loaded.
// The data itself will be in the 'data' argument as a JavaScript object.
function gotData(data) {
  let philosophicalquestions = getRandomElement(data.philosophicalquestions);
   $('body').append(philosophicalquestions)
}


// dataError()
//
// Called if the JSON does not load for some reason.
// Reports the error to the console.
function dataError(request, text, error) {
  console.error(error);
}

// getRandomElement ()
//
// Returns a random element from the array provided
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
// Function mousePressed to reload the page when the mouse is clicked.
function mousePressed() {
  location.reload(true);
}
