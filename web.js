var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

var port = process.env.PORT || 5000;
console.log("listening on port=" + port);
app.listen(port);

io.configure(function () {
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
});

function handler (req, res) {
  var url = (req.url == '/') ? '/index.html' : req.url;
  url = url.indexOf("panel.html") != -1 ? "/panel.html" : url;
  fs.readFile(__dirname + url, function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading ' + url);
    }

    res.writeHead(200);
    res.end(data);
  });
}

var messages = [];

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('share', function(data) {
    console.log('got a share message for ' + data.url);
    messages.push(data.url);
    if (messages.length > 10)
      messages.shift();
    //socket.broadcast.emit('ambient-update', data.url);
    socket.broadcast.emit('newsfeed-update', {news: JSON.stringify(messages)});
    socket.emit('newsfeed-update', {news: JSON.stringify(messages)});
  });
  socket.on('unshare', function(data) {
    for (var i = messages.length - 1; i >= 0; i--) {
      if (messages[i] === data.url)
        messages.splice(i, 1);
    }
    socket.broadcast.emit('newsfeed-update', {news: JSON.stringify(messages)});
    socket.emit('newsfeed-update', {news: JSON.stringify(messages)});
  });
  socket.on('chat1-message', function(message) {
    socket.emit('chat1-message-response', {message: message.split('').reverse().join('')});
  });
  socket.on('chat2-message', function(message) {
    socket.emit('chat2-message-response', {message: message.toUpperCase()});
  });
  socket.on('chat3-message', function(message) {
    socket.emit('chat3-message-response', {message: message.toLowerCase()});
  });
  socket.on('chat4-message', function(message) {
    socket.emit('chat4-message-response', {message: message.toUpperCase().split('').reverse().join('')});
  });
});
