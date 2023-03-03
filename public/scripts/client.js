/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const loadTweets = function() {
  $.ajax({
    type: 'GET',
    url: '/tweets',
    dataType: 'json',
    success: function(data) {
      renderTweets(data);
    },
    error: function(xhr, status, error) {
      console.error('Error fetching tweets:', error);
    }
  });
};


$(document).ready(function () {
  // add loadTweets at top
  loadTweets();
  // hide the error message initially
  $('.error-message').hide();
  $('form').submit(function (event) {
    // prevent default form submission behavior
    event.preventDefault();
    // get the tweet text
    const tweetText = $('#tweet-text').val();
    // check if tweet text is empty or exceeds 140 char
    if (!tweetText) {
      $('.error-message').text('Please write something').show();
      return;
    }
    if (tweetText.length > 140) {
      $('.error-message').text('Tweet cannot exceed 140 characters!').show();
      return;
    }
    // serialize the form data
    const serializedData = $(this).serialize();
    console.log(serializedData);

    // make the AJAX request to the server
    
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: serializedData,
      success: function(data) {
        console.log('Tweet posted successfully!');
        loadTweets(); // reload tweets after successful post
      },
      error: function(xhr, status, error) {
        console.error('Error posting tweet:', error);
      }
    });
  });
});







/*const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
] */



const createTweetElement = function (tweet) {

  let $tweet = $(`
    <article class="tweet">
      <header>
        <img src="${tweet.user.avatars}" alt="${tweet.user.name}'s avatar">
        <h3>${tweet.user.name}</h3>
        <p class="username">${tweet.user.handle}</p>
      </header>
      <div class="tweet-content">
        <p>${tweet.content.text}</p>
      </div>
      <footer>
        <p class="tweet-age">${timeago.format(tweet.created_at)}</p>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
  `);
  console.log(tweet);
  return $tweet;
};



const renderTweets = function(tweets) {
  console.log("hello tweet!");
  // store the list of tweets in the #tweets-container data attribute
  $('#tweets-container').data('tweets', tweets);
  // empty the #tweets-container section
  $('#tweets-container').empty();

  // loop through the array of tweets
  for (let tweet of tweets) {
    // create a tweet element using the createTweetElement function
    let $tweet = createTweetElement(tweet);
    console.log($tweet);
    // append the tweet element to the #tweets-container section
    $('#tweets-container').append($tweet);
  }
  console.log($('#tweets-container'));
};

loadTweets();