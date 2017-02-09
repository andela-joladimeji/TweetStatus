app.controller('TweetStatusCtlr', function ($http, $scope) {
  $scope.postTweet = function(tweetToPost){
    return $http.post('/tweetPost', {tweet: tweetToPost}).then(function(response){
      $scope.success = response.data
    }, function(err){
      $scope.error = err
    });
  }
});