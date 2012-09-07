var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

var port = process.env.PORT || 5000;
console.log("default value for ephemeral is:\n" +
            '{"origin":"https://warm-bayou-4025.herokuapp.com","name":"Ephemeral","workerURL":"https://warm-bayou-4025.herokuapp.com/worker.js","iconURL":"https://warm-bayou-4025.herokuapp.com/favicon.png","sidebarURL":"https://warm-bayou-4025.herokuapp.com/"}\n');
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
    if (messages.length > 15)
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
  socket.on('new-connection', function(name) {
    socket.broadcast.emit('new-connection', {name: name});
  });
  socket.on('chat1-message', function(data) {
    socket.broadcast.emit('chat1-message-response', {name: data.name, message: data.message});
  });
  socket.on('chat2-message', function(data) {
    socket.broadcast.emit('chat2-message-response', {name: data.name, message: data.message});
  });
  socket.on('chat3-message', function(data) {
    socket.broadcast.emit('chat3-message-response', {name: data.name, message: data.message});
  });
  socket.on('chat4-message', function(data) {
    socket.broadcast.emit('chat4-message-response', {name: data.name, message: data.message});
  });
});
