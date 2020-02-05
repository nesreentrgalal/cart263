$(document).ready(setup);

function setup() {
  //pen image class
  let $pen = $(".pen");
  // Make it draggable an revert to original position when released.
  $(".pen").draggable({
    revert: function(penObj) {
      if (penObj === true) {
        //success
        return false;
        //show the second page
      } else {
        $(location).attr(
          "href",
          "https://nesreentrgalal.github.io/cart263/assigments/project1/index.html"
        );
        return true;
      }
    }
  });
}
