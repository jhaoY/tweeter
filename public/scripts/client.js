/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  // Creates the tweet element
  const createTweetElement = function (tweet) {
    let $tweet = $(`
    <article class="tweet">
    <header>
      <div class="profile">
        <div class="profile-picture">
          <img src="${tweet.user.avatars}" alt="User's profile picture">
        </div>
        <span class="profile-name">${tweet.user.name}</span>
       </div>
       <span class="profile-username">${tweet.user.handle}</span>
    </header>
    <section class="tweet-content">
      <p>${tweet.content.text}</p>
    </section>
    <footer>
      <div>
        <time class="time-ago">${timeago.format(tweet.created_at)}</time>
      </div>
      <div class="tweet-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
      </article>
    `);
    $('.tweet-container').prepend($tweet);
  }

  //Loops through an array of tweet objects, then calls createTweetElement to generate a new <article> for each tweet
  const renderTweets = function (tweetArr) {
    for (let tweet of tweetArr) {
      createTweetElement(tweet);
    }
  }


  // POSTs /tweets when new tweet form is submitted
  $(function () {
    $('.newTweetForm').on('submit', function (event) {
      event.preventDefault();
      const tweetValue = $('#tweet-text').val();

      if (tweetValue === '') {
        const $errMsg = $('.error-message').text('Whoops, looks like your tweet is empty!')
        $errMsg.prepend('<i class="fa-solid fa-circle-exclamation" style="color: #e10e0e;"></i>');
        $errMsg.slideDown();
      } else if (tweetValue.length > 140) {
        const $errMsg = $('.error-message').text('Tweet is too long, please ensure it is below 140 characters');
        $errMsg.prepend('<i class="fa-solid fa-circle-exclamation" style="color: #e10e0e;"></i>');
        $errMsg.slideDown();
      } else {
        $('.error-message').slideUp();
        $.post('/tweets', $(this).serialize())
          .then(() => loadTweets());
      }
    })
  })

  // GETs tweets and renders them
  const loadTweets = function () {
    $.get('/tweets', function (tweets) {
      renderTweets(tweets);
    })
  }

  // Calling functions to generate content on page
  loadTweets();
})