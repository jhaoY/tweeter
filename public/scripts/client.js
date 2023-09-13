/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

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
        "handle": "@rd"
      },
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
      <div class="days-ago">
        <p>${tweet.created_at}</p>
      </div>
      <div class="tweet-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
      </article>
    `)
    $('.tweet-container').append($tweet);
  }

  const renderTweets = function (tweetArr) {
    for (let tweet of tweetArr) {
      createTweetElement(tweet);
    }
  }

  renderTweets(data);

})