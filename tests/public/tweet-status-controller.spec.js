describe('TweetStatusCtlr', function(){
  var controller, scope, $httpbackend;
  beforeEach(module('TweetStatus'));
  beforeEach(inject(function($controller, $rootScope, $injector){
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    controller = (function() {
      return $controller('TweetStatusCtlr', {
        $scope: scope
      });
    })();
  }));

  it('should be defined', function() {
    expect(controller).toBeDefined();
  });

  it('should have postTweet defined', function() {
    expect(scope.postTweet()).toBeDefined();
  });

  it('should post Tweet', function() {
    var tweetToPost = 'This is a good day';
    $httpBackend.expectPOST('/tweetPost', {tweet: tweetToPost}).respond(200, 'Successfully tweeted');
    scope.postTweet(tweetToPost)
    $httpBackend.flush();
  });
});

