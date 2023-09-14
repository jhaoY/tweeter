$(document).ready(function() {
  //Caching jQuery objects
  const $textarea = $('.new-tweet form textarea');
  const $counter = $('.new-tweet .counter');

  // Checks character count, if above 140 counter turns red
  $textarea.on('input', function() {
    let inputValue = $(this).val();
    let length = inputValue.length;

    $counter.text(140 - length);

    if (length > 140) {
      $counter.addClass('exceed-limit');
    } else {
      $counter.removeClass('exceed-limit');
    }
  })


})