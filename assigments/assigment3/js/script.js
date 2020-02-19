"use strict";

/********************************************************************


Assignment 3: Slamina Special
Nesreen Galal


*********************************************************************/

$(document).ready(setup);

// The Animals array
let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];

let answers = [];
const NUM_OPTIONS = 5;
let correctAnimal;
let score = 0;

function setup() {

  //activate annyang
  if (annyang) {
    // https://www.talater.com/annyang/ with the help of this
    let command = {
      "*I give up": handleGiveUp,
      "*Repeat again": repeatAgain,
      "I think it's *animal": handleGuessing,
    };



    // annyang listens to command (refering the commanding variable above)
    annyang.addCommands(command);

    newRound();
    showScore();
    //annyang start!
    annyang.start();
  }
}

//buttons
function addButton(label) {
  let $button = $("<div class='guess'></div>");
  $button.text(label);
  $button.button();
  $button.on('click', handleGuess);
  $('body').append($button);
}

// a new round with random animals
function newRound() {
  answers = []; //reset answers
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let answer = animals[Math.floor(Math.random() * animals.length)];
    addButton(answer);
    answers.push(answer);
  }
  correctAnimal = answers[Math.floor(Math.random() * answers.length)]; //choose the correct answer
  sayBackwards(correctAnimal);
}
//if guessed correctly
function handleGuess() {
  if ($(this).text() === correctAnimal) {
    $('.guess').remove();
    setTimeout(newRound, 1000);
    score++;
    showScore();

  } else {
    $(this).effect('shake');
    sayBackwards(correctAnimal);
    score = 0;
    showScore();
  }
}
// responsive voice sayig the text backwards
function sayBackwards(text) {
  let backwardsText = text.split('').reverse().join('');
  let options = {
    pitch: Math.random(),
    rate: Math.random()
  };
  responsiveVoice.speak(backwardsText, 'UK English Male', options);
}
//user saying giving up, create a shake effect and return score to zero
function handleGiveUp() {
  $("div").each(function(animal) {
    if ($(this).text() === correctAnimal) {
      //highlight effect
      //https://www.tutorialspoint.com/jquery/effect-highlight.htm
      $(this).effect("highlight", {
        color: "#669966"
      }, 3000);
      score = 0;
      //displaying the score
      showScore();
      newRound();
    }
  });
}

// say phrase, if guessed correctly add score and new round if not score goes back to zero
function handleGuessing(phrase) {
  if (phrase === correctAnimal) {
    $(".guess").remove();
    setTimeout(newRound, 1000);
    score++;
    //showing the score
    showScore();
    newRound();
  } else {
    // If they said the wrong thing, say the word again, and shift it to zero
    sayBackwards(correctAnimal);
    score = 0;
    //displaying the score
    showScore();
  }

}

//says the text again when the user asks
function repeatAgain() {
  sayBackwards(correctAnimal);
}
//score is h2 from the body text and score varaible
function showScore() {
  $("h2").text(`Score: ${score}`);
}
