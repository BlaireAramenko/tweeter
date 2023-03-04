# Tweeter Project

Tweeter is a single-page Twitter clone that allows users to compose and post tweets, view their own and other users' tweets in reverse-chronological order, and interact with tweets by liking, retweeting, or flagging them.

This project consists of HTML, CSS, JS, jQuery and AJAX on the front-end, and Node, and Express on the back-end.

## Dependencies

- Express
- Node 5.10.x or above

## Tweeter Navigation and Tweet Box 

![Tweeter project homepage](https://github.com/BlaireAramenko/tweeter/blob/master/images/tweeter-project.png)

## Example Tweets 

Each tweet contains the user's name, avatar, and handle. The tweet body contains the tweet text. The footer displays how long ago the tweet was created as well as the "Flag", "Re-tweet", and "Like" icons.

![Tweeter project tweets](https://github.com/BlaireAramenko/tweeter/blob/master/images/tweets.png)

## Icon Hover 

When the user hovers over an icon, the icon turns red. Additionally, when the user hovers over a tweet, the tweet displays a box shadow.

![Icon hover](https://github.com/BlaireAramenko/tweeter/blob/master/images/icon-hover.png)

## Error Messages

When a user submits a tweet that contains more than 140 characters, an error message is displayed. Furthermore, the character counter turns red when more than 140 characters have been typed, and it shows how many characters over the 140 limit have been typed. 

![Exceed character count](https://github.com/BlaireAramenko/tweeter/blob/master/images/error-message1.png)

When a user submits a tweet without writing naything, an error message is displayed. 

![Input missing](https://github.com/BlaireAramenko/tweeter/blob/master/images/error-message2.png)