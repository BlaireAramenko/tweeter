$(document).ready(function() {
  console.log('This is working!');
  $('.new-tweet').find('textarea').on('input', function() {
    let count = this.value.length;
    console.log("Number of characters:", count);
    let counter = $("#counter");
    counter.text(140 - count);
    if (count > 140) {
      counter.addClass('invalid');
      console.log('Character limit exceeded!');
    } else {
      counter.removeClass('invalid');
    }
  });
});
