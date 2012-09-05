/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


var SPRITES = {
  bugIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUFBMzNCQ0JCOThEMTFFMThFRUI5Njk2MEUzNzYyNUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUFBMzNCQ0NCOThEMTFFMThFRUI5Njk2MEUzNzYyNUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QUEzM0JDOUI5OEQxMUUxOEVFQjk2OTYwRTM3NjI1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QUEzM0JDQUI5OEQxMUUxOEVFQjk2OTYwRTM3NjI1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Piq9YVIAAB6mSURBVHjaxHsJeFXl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",
  mentionIcon: "data:image/png;base64,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%3D",
  shareIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJGSURBVDjLpZNLTxpRFMdd+EX8BixZ6VfxQ9imq3YzSdNVE2MNyEMYAeUNofIKEBjA8CoiM4BCgiQgaJqWtjySAc2/585iogG76eI/czN3/r9z7jnnbgDY+B8pj3w+v5nNZncEQdhLp9N8KpUqJhKJYTwel2OxmByJRIbn5+fFUCjEB4PBPZ/Pt+PxeDZVAJm5SqUCURTRarVUNZtNdd1oNFCtVkHBEA6H4XK5OBWQyWQwnU4xHA7RbrdRr9eVn8vlsiK2ZnC2NxqNMB6PcXZ2BhVAacu3t7eYTCYQbr4jIP2ErzWHt/0I780jnOIUjsoDYlcDjH//UYAOh0NWAXTmbTrzUmpew3bRA196gONqAndrARfJevkLXzJ9fI5dwxkvwG63L09OTrZVABMVTBuNRpfVegPWlIRPvhI+nF7gHZ/FG4sAzl2AP1V8YX4BYKJKa6nSy8srEZakiPeneby1CvjoKeJrurRiXgEwUZu0fr9/+a16iVStC9/FNSLCevNaAJPX69W63e6nxWKhdIfMT+vMrwKYnE6nl7WtVCqB53nbPyfxuSjyFvV4l9pU6Xa7yOVysFgsebPZvGs0GrdeBdBoami6ioFAADQXoPHFYDBQ3lQXUHFxfHwMnU5XPDw81KwAyPxDkiTIsozZbIa7uztFDHJ/f698Y3vJZBIHBwejFQClzbFIhUIBnU4H/X4f8/lcUa/XQ61WU+7A0dER9vf3ubU1sNlsGqvVylGqWZPJ1DEYDNDr9SztLqWdpcgcmTXPPX8BpLUNr3FYePgAAAAASUVORK5CYII=",
  sharedIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFDSURBVCjPfdBLSkIBFIfxM3Aj7sCho9yKi3AJdwUiYk/LTMyyuohZYmKZkD0uptUlDSt8BWVmPuB2ka+BYdog/sPvNzgcQf6fIDlL1nHiygTS+VQzaRwaiWY8Hwuorh3HtgURJKtcUkJHR+cOHZ1bNHLsE1EQQY7p06RMEY0LLtAoUaZFhzCIIBnjkR4fdHinzQvPPFCjh0bIQARJz6XMMj06vNLkkXuqfKKxYa7PIYIgSfuBqdOjxQNFbulO8g9A4vaYeUOXa7SZPAGIat81C7zR5WoqTwEkat8afdFnY/SbZwCyGS1zTiD455PjbVnDztBllVNWcyvOJesM2LZF8ntkSFAngUoMP7681zYBkfYNBgMaNKjzwgCDIzytCQgrKmdUqDFkyBMF9lnArUzdELStKf7scmWReXxVb9ajuG3j8g3ex2UlnmJ3nQAAAABJRU5ErkJggg==",
}

var baseUrl = 'https://warm-bayou-4025.herokuapp.com';

function setAmbientNotification(){
  apiPort.postMessage({
    topic: 'social.ambient-notification',
    data: {
      name: 'mentions',
      iconURL: SPRITES.mentionIcon,
      counter: 0,
      contentPanel: baseUrl + '/social/mentions'
    }
  });
}

function dump2Sidebar(msg) {
  if (sidebarPort)
    sidebarPort.postMessage({topic: 'dump', message: msg});
  else
    dump("\n\n SIDEBAR NOT AVAILABLE: " + msg + "\n\n");
}

var handlers = {
  'social.cookie-changed': function(data, port) {
    dump2Sidebar('got social.cookie-changed (worker)');
  },
  'social.user-recommend-prompt': function(data, port) {
    dump2Sidebar('got social.user-recommend-prompt (worker)');
    port.postMessage({topic: 'social.user-recommend-prompt-response',
                      data: {
                        url: data.url,
                        images: {
                          share: SPRITES.shareIcon,
                          unshare: SPRITES.sharedIcon
                        },
                        messages: {
                          shareTooltip: "Share me quick!",
                          unshareTooltip: "I was shared!",
                          sharedLabel: "I was shared with the quickness!",
                          unsharedLabel: "Nobody shared me..."
                        }
                      }
    });
  },
  'social.user-recommend': function(data, port) {
    dump2Sidebar('got social.user-recommend');
    sidebarPort.postMessage({topic: 'share',
                             data: {
                               url: data.url,
                             }
    });
  },
  'social.user-unrecommend': function(data, port) {
    dump2Sidebar('got social.user-unrecommend');
  },
  'ambient-update': function(message){
    dump2Sidebar('handling ambient-update (worker)');
    setAmbientNotification();
  },
  'social.port-closing': function(data, port){
    dump2Sidebar('port-closing (worker), ' + port);
    if (apiPort == port){
      apiPort.close();
      apiPort = null;
    }
  },
  'social.initialize': function(data, port){
    dump2Sidebar('social.initialize on port ' + JSON.stringify(port));
    apiPort = port;

    apiPort.postMessage({
      topic: 'social.user-profile',
      data: {
        userName: "msujaws",
        displayName: "Jared Wein",
        portrait: "",
        profileURL: baseUrl + '/profile'
      }
    });

    setAmbientNotification();
  },
  'sidebar.registration': function(data, port){
    sidebarPort = port;
    dump2Sidebar('sidebar.registration completed');
  }
};

// Side-bar stuff
var apiPort = null;
var sidebarPort = null;

var ports = [];

onconnect = function(e) {
  var port = e.ports[0];
  port.onmessage = function (e) {
    var msg = e.data;
    var handler = handlers[msg.topic];

    if (handler == null){
      dump("No handler found for " + msg.topic + "\n\n\n");
    }
    else {
      try {
        handler(msg, port);
      }
      catch(e){
        dump("Error thrown by handler: " + e.toString() + "\n\n\n");
      }
    }
  }
  inbound = e.ports[0];
  if (e.ports.size > 1)
    outbound = e.ports[1];
  else
    outbound = inbound;
}
