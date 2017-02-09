var controller = require('./controller');
module.exports = function(app){
  app.route('/tweetPost').post(controller.tweet);
}