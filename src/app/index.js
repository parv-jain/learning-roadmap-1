var restify = require('restify');

var server = restify.createServer();

var tasks = [];

server.pre(function(req, res, next) {
  tasks.push(function() {
    return req.headers;
  });

  // Synchronously get user from session, maybe jwt token
  req.user = {
    id: 1,
    username: 'Leaky Master',
  };

  return next();
});

server.get('/', function(req, res, next) {
  res.send('Hi ' + req.user.username);
  return next();
});

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
