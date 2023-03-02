/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
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
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]



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
  // loop through the array of tweets
  for (let tweet of tweets) {
    // create a tweet element using the createTweetElement function
    let $tweet = createTweetElement(tweet);
    // append the tweet element to the #tweets-container section
    $('#tweets-container').append($tweet);
  }
};

renderTweets(data);

