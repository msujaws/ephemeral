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
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
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
    var newMessage = {url: data.url, title: data.title};
    messages.push(newMessage);
    if (messages.length > 10)
      messages.shift();
    socket.emit('update', newMessage);
    socket.emit('newsfeed-response', {news: JSON.stringify(messages)});
  });
  socket.on('chat', function(data) {
    socket.emit('chat-response', {message: data.message.split('').reverse().join('')});
  });
});
