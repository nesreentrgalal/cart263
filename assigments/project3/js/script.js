/********************************************************************
Nesreen Galal
Project 3: Philopsical Simulation

This Project is inspired by philosophical idealogies like extensionalism according to wiki its a philosophical theory or
approach which emphasizes the existence of the individual person as a free and responsible agent determining their own development
 through acts of the will, transhumanism which is the possibility of humans subconcious to be in transplanted in the computer
and retro futurism, as well as Walter Benjamin's The Work of Art in the Age of Mechanical Reproduction, the idea of copies, like replicants
in Blade Runner. Blade Runner's Voight-Kampff Test and Hal from 2001 Space Odyssey were inspirations for this project.
Retro Futurism/Cyperpunk vibes adds to the retro futurism aesthetics that I was going for.Instead of the human asking
questions, its the AI asking questions.

Code help thanks to Project 4,
Pippin's project Condiments Cacophony
*********************************************************************/

$(document).ready(function() {

  // load the data we're going to use to get the random questions by using jQuery's .getJSON() function
  $.getJSON('data/data.json')
    .done(gotData)
    .fail(dataError);
  $(document).one("click", mousePressed);
});


// function gets called by getJSON when the data is loaded.
function gotData(data) {
  // select random elements from the arrays  of questions inside
  // philosophical questions to get from data.json
  let philosophicalQuestion = getRandomElement(data.philosophicalQuestions);
  // add it to the page
    $('#question').text(philosophicalQuestion)
  // reponsive voice command to say the philospical questions
    responsiveVoice.speak(
    philosophicalQuestion,
    //a voiceover bot for the questions interviewing the human
    "UK English Male",
    { pitch: 0.5 },
    { rate: 0.5 }
  );

}

// dataError()
// when JSON does not load for some reason.
function dataError(request, text, error) {
//  Reports the error to the console.
  console.error(error);
}

// getRandomElement ()
// Returns a random question from the array provided
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
