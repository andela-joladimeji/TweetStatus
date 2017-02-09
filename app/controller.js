Twitter = require('twitter')
module.exports.tweet = function(req, res){
  tweetToPost = req.body.tweet;
  TwitterClient = new Twitter({
    consumer_key: process.env.consumer_api_key,
    consumer_secret: process.env.consumer_api_secret,
    access_token_key:process.env.twitter_access_token,
    access_token_secret: process.env.twitter_access_token_secret
  });
  TwitterClient.post('statuses/update', {status: tweetToPost})
  .then(function(tweet){
    return res.send({data:"Sucessfully Tweeted"})
  }).catch(function(e){
    console.log(e)
  });
}