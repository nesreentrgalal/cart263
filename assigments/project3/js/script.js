/********************************************************************
Nesreen Galal
Project 3:
Code help thanks to Project 4,
Pippin's project Condiments Cacophony
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
  // Now we select random elements from the three arrays inside
  // our JSON to get a random condiment, cat, and room. Then we add those
  // words onto our page by setting the text of the appropriate span.

  // philosophical questions to get from data.json
  let philosophicalQuestion = getRandomElement(data.philosophicalQuestions);
  // add it to the page
  $('#question').text(philosophicalQuestion)
  // reponsive voice command
    responsiveVoice.speak(
    philosophicalQuestion,
    //a voiceover bot for the questions interviewing the human
    "UK English Male",
    { pitch: 0.5 },
    { rate: 0.5 }
  );
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
