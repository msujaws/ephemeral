/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


var SPRITES = {
  shareIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJGSURBVDjLpZNLTxpRFMdd+EX8BixZ6VfxQ9imq3YzSdNVE2MNyEMYAeUNofIKEBjA8CoiM4BCgiQgaJqWtjySAc2/585iogG76eI/czN3/r9z7jnnbgDY+B8pj3w+v5nNZncEQdhLp9N8KpUqJhKJYTwel2OxmByJRIbn5+fFUCjEB4PBPZ/Pt+PxeDZVAJm5SqUCURTRarVUNZtNdd1oNFCtVkHBEA6H4XK5OBWQyWQwnU4xHA7RbrdRr9eVn8vlsiK2ZnC2NxqNMB6PcXZ2BhVAacu3t7eYTCYQbr4jIP2ErzWHt/0I780jnOIUjsoDYlcDjH//UYAOh0NWAXTmbTrzUmpew3bRA196gONqAndrARfJevkLXzJ9fI5dwxkvwG63L09OTrZVABMVTBuNRpfVegPWlIRPvhI+nF7gHZ/FG4sAzl2AP1V8YX4BYKJKa6nSy8srEZakiPeneby1CvjoKeJrurRiXgEwUZu0fr9/+a16iVStC9/FNSLCevNaAJPX69W63e6nxWKhdIfMT+vMrwKYnE6nl7WtVCqB53nbPyfxuSjyFvV4l9pU6Xa7yOVysFgsebPZvGs0GrdeBdBoami6ioFAADQXoPHFYDBQ3lQXUHFxfHwMnU5XPDw81KwAyPxDkiTIsozZbIa7uztFDHJ/f698Y3vJZBIHBwejFQClzbFIhUIBnU4H/X4f8/lcUa/XQ61WU+7A0dER9vf3ubU1sNlsGqvVylGqWZPJ1DEYDNDr9SztLqWdpcgcmTXPPX8BpLUNr3FYePgAAAAASUVORK5CYII=",
  sharedIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFDSURBVCjPfdBLSkIBFIfxM3Aj7sCho9yKi3AJdwUiYk/LTMyyuohZYmKZkD0uptUlDSt8BWVmPuB2ka+BYdog/sPvNzgcQf6fIDlL1nHiygTS+VQzaRwaiWY8Hwuorh3HtgURJKtcUkJHR+cOHZ1bNHLsE1EQQY7p06RMEY0LLtAoUaZFhzCIIBnjkR4fdHinzQvPPFCjh0bIQARJz6XMMj06vNLkkXuqfKKxYa7PIYIgSfuBqdOjxQNFbulO8g9A4vaYeUOXa7SZPAGIat81C7zR5WoqTwEkat8afdFnY/SbZwCyGS1zTiD455PjbVnDztBllVNWcyvOJesM2LZF8ntkSFAngUoMP7681zYBkfYNBgMaNKjzwgCDIzytCQgrKmdUqDFkyBMF9lnArUzdELStKf7scmWReXxVb9ajuG3j8g3ex2UlnmJ3nQAAAABJRU5ErkJggg==",
  ephemeralIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAQAAAAEABcxq3DAAAC1klEQVQ4y41Tz29UVRg933fffdOZlkpnSlurjgsiP0IEjQmYuNCFC0OCLIwx1hAhceOCmJCYEOwWF/AXuCAmFhNLiBAim7pTokiaEnUj2tpOJ0AL/cF05r5373v33c9FWwTjgpOc1Zdzvh8nH+EJcOTzr7ZtqQ08X+RZunq38deF08ezzRoBwMmrM/t7KuWjijCkCLN57r/+7M361IlvJut9A09/opheZELOQE6AEZErv1+buDg2eqygw+d/2zlcrZ7ojshpokQzDETay9ZP9ZT0RzETK0L2X5q8+OPH78bHovpg7WCj4xeKVFoRoROTtBWk7cEfrkmxEq8LnCKyiuCiddq8CL722tu7o/oWPdAwfnWlCA9iSDuGtBnS91K1a9vkg6wZBClDUkWwCrARxCqChUgagvRzJyv+7I85jyBtvc7OU7Gq1Xs0QHAmBGNEEhMkMSEkSRCTFMFkoUgIYL7+y/VvIbIaQ4yGmBiSKgBbu1TRqwhMcAw4BbERYBXERRCnAceEoGa+H3d6+75bvYPPootga13RgcGyPtRfjl4Jubygga2ukAYBrQ2x1RDHgBBB6NG83780+8ZQJT5WUmR7NO+xPriF1C/7EFp3rb/KkGUNsQwEIpCEsBRtind88ClXSvqdmcQ3NSFhoNmnadeSK+4RpKUhgwy5sykGEC6/t2vuoUG5OjC8t1qqXmx25r1IJwLMcibzEWQogoQIAgZAhDKARfLZNAA8NGDA95aYuhW5NS+GIIYhiYLMaUhBQC/b9rRdaKxqeAztefXjt0598eVjNzj70+KZqSU3e9vm9zUk2UglYSAohn2mu/xcNeYdJi8u/Dp5bW1idCThRw0m5+6ci0mChqQaksSQdGPnSkWrZmB+vZn49orLhydGR5KNyf/F+MjLt+bn/74SI3Q0RDFQIkK+ePOHG2OHt6+1Mv/zvTSbXnH+9pN88f9i57vHH2v6DzHye4Ou+EnBAAAAPnRFWHRjb21tZW50AENsZWFuaW5nIGJ1YmJsZXMgZnJvbSBJY29uIEdhbGxlcnkgaHR0cDovL2ljb25nYWwuY29tL8POZD8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTEtMDgtMjFUMTQ6NDQ6MjUtMDY6MDAZD+vfAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDExLTA4LTIxVDE0OjQ0OjI1LTA2OjAwaFJTYwAAAABJRU5ErkJggg==",
  timelineIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADZSURBVBgZBcFBbo1hGAbQ83+5kRCJhA2IEQMrYAPMxRZMbcLG2ICRGTeUtE1jpr1p3/95nLMV8PnL3eOT07Pr79f+/f34GuAAcPfqgXseunlx6ysADsfC0+3k1n03ODP41oiX2+IReO7KH7sfLr1HPBEsCOKNc0cXPghGDFZUUPHWb+/UIKpYUUXU+LRFBbsYLCqICkbsiArWroKIQVQQFayIYFRQFYwKVtQgqhgxiNixooJdDKIgCtaIHVFB1KAqWFFBVDCiiAoOuzMwfgnqpyCOYCsAAADgP4mZnXDW2crZAAAAAElFTkSuQmCC",
}

var baseUrl = 'https://warm-bayou-4025.herokuapp.com';

function setAmbientNotification(){
  apiPort.postMessage({
    topic: 'social.ambient-notification',
    data: {
      name: 'mentions',
      iconURL: SPRITES.timelineIcon,
      counter: 0,
      contentPanel: baseUrl + '/panel.html'
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
    for (var i in data.data)
      dump2Sidebar(i + " " + data.data[i]);
    sidebarPort.postMessage({topic: 'share',
                             data: {
                               url: data.data.url,
                             }
    });
  },
  'social.user-unrecommend': function(data, port) {
    dump2Sidebar('got social.user-unrecommend');
    sidebarPort.postMessage({topic: 'unshare',
                             data: {
                               url: data.data.url,
                             }
    });
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
  'sidebar.registration': function(data, port) {
    dump2Sidebar('sidebar.registration completed');
    sidebarPort = port;
  },
  'chat1-registration': function(data, port) {
    dump2Sidebar('registered chat1 port (worker)');
    chat1Port = port;
  },
  'chat1-message': function(data, port) {
    dump2Sidebar('got chat1-message (worker)');
    sidebarPort.postMessage({topic: 'chat1-message', message: data.data.message});
  },
  'chat1-message-response': function(data, port) {
    dump2Sidebar('got chat1-message-response (worker)');
    chat1Port.postMessage({topic: 'chat-response', data: data});
  }
};

var apiPort = null;
var sidebarPort = null;
var chat1Port = null;

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
