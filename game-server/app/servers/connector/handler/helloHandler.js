module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
};

/**
 * New client entry chat server.
 *
 * @param  {Object}   msg     request message
 * @param  {Object}   session current session object
 * @param  {Function} next    next stemp callback
 * @return {Void}
 */
Handler.prototype.hello = function(msg, session, next) {
  console.log('hello handler: %j', msg);
  this.app.get('channelService').broadcast('connector', 'onHey',
      {content: 'hey~'}, {}, function(err) {
    if(err) {
      console.error(err.stack);
    }
  });
  next();
};

Handler.prototype.hi = function(msg, session, next) {
  console.log('hi handler: %j', msg);
  next(null, {msg: 'hi~~'});
};

Handler.prototype.echo = function(msg, session, next) {
  next(null, {body: msg.body});
};