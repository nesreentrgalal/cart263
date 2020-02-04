let $pen = $(".pen");
// Make it draggable an revert to original position when released.
$(".pen").draggable({
  revert: function(penObj) {
    if (penObj === true) {
      //success
      return false;
    } else {
      //reverting is happening , hide intro annd show wrapper and divs
      $('.intro').hide();
      $('.wrapper').show();
      $('#Dialog').show();
      return true;
    }
  }
});
