Twitter = require('twitter')
module.exports.tweet = function(req, res){
  tweetToPost = req.body;
  TwitterClient = new Twitter({
    consumer_key: Process.env.consumer_api_key,
    consumer_secret: Process.env.consumer_api_secret,
    access_token_key:Process.env.twitter_access_token,
    access_token_secret: Process.env.twitter_access_token_secret
  });
  TwitterClient.post('statuses/update', {status: tweetToPost})
  .then(function(tweet){
    console.log(tweet)
    return res.send(tweet)
  }).catch(function(e){
    console.log(e)
  });
}