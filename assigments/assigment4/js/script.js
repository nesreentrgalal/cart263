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
  // Now we select random elements from the three arrays inside
  // our JSON to get a random condiment, cat, and room. Then we add those
  // words onto our page by setting the text of the appropriate span.

  // First the condiment
  // Get a random condiment from the condiments array in the JSON
  let condiment = getRandomElement(data.condiments);
  // Assume it's singular
  let verb = 'is';
  // Check if the last latter of the condiment is an 's'
  if (condiment.charAt(condiment.length - 1) === 's') {
    // If so, assume it's plural (this is a flawed assumption)
    verb = 'are';
  }

  // Now the cat
  let cat = getRandomElement(data.cats);
  let catArticle = "a";
  //this fixes the indefinite article for the vowels
  if (
    cat.charAt(0).toLowerCase() === "a" ||
    cat.charAt(0).toLowerCase() === "e" ||
    cat.charAt(0).toLowerCase() === "i" ||
    cat.charAt(0).toLowerCase() === "o" ||
    cat.charAt(0).toLowerCase() === "u"
  ) {
    catArticle = "an";
  }

  // Same again for room
  let room = getRandomElement(data.rooms);
  let roomArticle = "a";
  //this fixes the indefinite article for the vowels
  if (
    room.charAt(0).toLowerCase() === "a" ||
    room.charAt(0).toLowerCase() === "e" ||
    room.charAt(0).toLowerCase() === "i" ||
    room.charAt(0).toLowerCase() === "o" ||
    room.charAt(0).toLowerCase() === "u"
  ) {
    roomArticle = "an";
  }

  // New dataset art movements that ends with isms
  let ism = getRandomElement(data.isms);
  let ismArticle = "a";
  //this fixes the indefinite article for the vowels
  if (
    ism.charAt(0).toLowerCase() === "a" ||
    ism.charAt(0).toLowerCase() === "e" ||
    ism.charAt(0).toLowerCase() === "i" ||
    ism.charAt(0).toLowerCase() === "o" ||
    ism.charAt(0).toLowerCase() === "u"
  ) {
    ismArticle = "an";
  }

  // New dataset names that are monsters names
  let monster = getRandomElement(data.names);
  let monsterArticle = "a";
  //this fixes the indefinite article for the vowels
  if (
    monster.charAt(0).toLowerCase() === "a" ||
    monster.charAt(0).toLowerCase() === "e" ||
    monster.charAt(0).toLowerCase() === "i" ||
    monster.charAt(0).toLowerCase() === "o" ||
    monster.charAt(0).toLowerCase() === "u"
  ) {
    monsterArticle = "an";
  }
  // the description with a template string with the values and variables created
  let description = `${condiment} and ${ismArticle} ${ism} ${verb} like ${catArticle} ${cat} in ${roomArticle} ${room} because of ${monsterArticle} ${monster}.`;
  // add it to the page
  $('body').append(description)
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
