/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

var firstNames = ["John", "Sally", "Mark", "Felipe", "Joe", "Jose", "Juan", "Jared", "Matt", "Manuel", "Mohammed", "Mehdi", "Fatima", "Mariam", "Ali", "Noah", "Milan", "William", "Henry", "Marie", "Jazmin", "Malcolm", "Daniel", "Jacob", "Santiago", "Olivia", "Mia"];
var lastNames = ["Smith", "Brown", "Lee", "Wilson", "Mohammad", "Ali", "Dia", "Rodriguez", "Morales", "Gruber", "Maier", "Brunner", "Castro"];
var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
var name = firstName + " " + lastName;

var SPRITES = {
  shareIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJGSURBVDjLpZNLTxpRFMdd+EX8BixZ6VfxQ9imq3YzSdNVE2MNyEMYAeUNofIKEBjA8CoiM4BCgiQgaJqWtjySAc2/585iogG76eI/czN3/r9z7jnnbgDY+B8pj3w+v5nNZncEQdhLp9N8KpUqJhKJYTwel2OxmByJRIbn5+fFUCjEB4PBPZ/Pt+PxeDZVAJm5SqUCURTRarVUNZtNdd1oNFCtVkHBEA6H4XK5OBWQyWQwnU4xHA7RbrdRr9eVn8vlsiK2ZnC2NxqNMB6PcXZ2BhVAacu3t7eYTCYQbr4jIP2ErzWHt/0I780jnOIUjsoDYlcDjH//UYAOh0NWAXTmbTrzUmpew3bRA196gONqAndrARfJevkLXzJ9fI5dwxkvwG63L09OTrZVABMVTBuNRpfVegPWlIRPvhI+nF7gHZ/FG4sAzl2AP1V8YX4BYKJKa6nSy8srEZakiPeneby1CvjoKeJrurRiXgEwUZu0fr9/+a16iVStC9/FNSLCevNaAJPX69W63e6nxWKhdIfMT+vMrwKYnE6nl7WtVCqB53nbPyfxuSjyFvV4l9pU6Xa7yOVysFgsebPZvGs0GrdeBdBoami6ioFAADQXoPHFYDBQ3lQXUHFxfHwMnU5XPDw81KwAyPxDkiTIsozZbIa7uztFDHJ/f698Y3vJZBIHBwejFQClzbFIhUIBnU4H/X4f8/lcUa/XQ61WU+7A0dER9vf3ubU1sNlsGqvVylGqWZPJ1DEYDNDr9SztLqWdpcgcmTXPPX8BpLUNr3FYePgAAAAASUVORK5CYII=",
  sharedIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFDSURBVCjPfdBLSkIBFIfxM3Aj7sCho9yKi3AJdwUiYk/LTMyyuohZYmKZkD0uptUlDSt8BWVmPuB2ka+BYdog/sPvNzgcQf6fIDlL1nHiygTS+VQzaRwaiWY8Hwuorh3HtgURJKtcUkJHR+cOHZ1bNHLsE1EQQY7p06RMEY0LLtAoUaZFhzCIIBnjkR4fdHinzQvPPFCjh0bIQARJz6XMMj06vNLkkXuqfKKxYa7PIYIgSfuBqdOjxQNFbulO8g9A4vaYeUOXa7SZPAGIat81C7zR5WoqTwEkat8afdFnY/SbZwCyGS1zTiD455PjbVnDztBllVNWcyvOJesM2LZF8ntkSFAngUoMP7681zYBkfYNBgMaNKjzwgCDIzytCQgrKmdUqDFkyBMF9lnArUzdELStKf7scmWReXxVb9ajuG3j8g3ex2UlnmJ3nQAAAABJRU5ErkJggg==",
  ephemeralIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAQAAAAEABcxq3DAAAC1klEQVQ4y41Tz29UVRg933fffdOZlkpnSlurjgsiP0IEjQmYuNCFC0OCLIwx1hAhceOCmJCYEOwWF/AXuCAmFhNLiBAim7pTokiaEnUj2tpOJ0AL/cF05r5373v33c9FWwTjgpOc1Zdzvh8nH+EJcOTzr7ZtqQ08X+RZunq38deF08ezzRoBwMmrM/t7KuWjijCkCLN57r/+7M361IlvJut9A09/opheZELOQE6AEZErv1+buDg2eqygw+d/2zlcrZ7ojshpokQzDETay9ZP9ZT0RzETK0L2X5q8+OPH78bHovpg7WCj4xeKVFoRoROTtBWk7cEfrkmxEq8LnCKyiuCiddq8CL722tu7o/oWPdAwfnWlCA9iSDuGtBnS91K1a9vkg6wZBClDUkWwCrARxCqChUgagvRzJyv+7I85jyBtvc7OU7Gq1Xs0QHAmBGNEEhMkMSEkSRCTFMFkoUgIYL7+y/VvIbIaQ4yGmBiSKgBbu1TRqwhMcAw4BbERYBXERRCnAceEoGa+H3d6+75bvYPPootga13RgcGyPtRfjl4Jubygga2ukAYBrQ2x1RDHgBBB6NG83780+8ZQJT5WUmR7NO+xPriF1C/7EFp3rb/KkGUNsQwEIpCEsBRtind88ClXSvqdmcQ3NSFhoNmnadeSK+4RpKUhgwy5sykGEC6/t2vuoUG5OjC8t1qqXmx25r1IJwLMcibzEWQogoQIAgZAhDKARfLZNAA8NGDA95aYuhW5NS+GIIYhiYLMaUhBQC/b9rRdaKxqeAztefXjt0598eVjNzj70+KZqSU3e9vm9zUk2UglYSAohn2mu/xcNeYdJi8u/Dp5bW1idCThRw0m5+6ci0mChqQaksSQdGPnSkWrZmB+vZn49orLhydGR5KNyf/F+MjLt+bn/74SI3Q0RDFQIkK+ePOHG2OHt6+1Mv/zvTSbXnH+9pN88f9i57vHH2v6DzHye4Ou+EnBAAAAPnRFWHRjb21tZW50AENsZWFuaW5nIGJ1YmJsZXMgZnJvbSBJY29uIEdhbGxlcnkgaHR0cDovL2ljb25nYWwuY29tL8POZD8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTEtMDgtMjFUMTQ6NDQ6MjUtMDY6MDAZD+vfAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDExLTA4LTIxVDE0OjQ0OjI1LTA2OjAwaFJTYwAAAABJRU5ErkJggg==",
  timelineIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADZSURBVBgZBcFBbo1hGAbQ83+5kRCJhA2IEQMrYAPMxRZMbcLG2ICRGTeUtE1jpr1p3/95nLMV8PnL3eOT07Pr79f+/f34GuAAcPfqgXseunlx6ysADsfC0+3k1n03ODP41oiX2+IReO7KH7sfLr1HPBEsCOKNc0cXPghGDFZUUPHWb+/UIKpYUUXU+LRFBbsYLCqICkbsiArWroKIQVQQFayIYFRQFYwKVtQgqhgxiNixooJdDKIgCtaIHVFB1KAqWFFBVDCiiAoOuzMwfgnqpyCOYCsAAADgP4mZnXDW2crZAAAAAElFTkSuQmCC",
}

var baseUrl = 'https://warm-bayou-4025.herokuapp.com';

function setAmbientNotification(count){
  apiPort.postMessage({
    topic: 'social.ambient-notification',
    data: {
      name: 'mentions',
      iconURL: SPRITES.timelineIcon,
      counter: count || 0,
      contentPanel: baseUrl + '/panel.html?name=' + encodeURIComponent(name)
    }
  });
}

function dump2Sidebar(msg) {
  if (sidebarPort)
    sidebarPort.postMessage({topic: 'dump', message: msg});
  else
    dump("\n\n SIDEBAR NOT AVAILABLE: " + msg + "\n\n");
}

var count = 0;

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
  'ambient-update': function(data){
    dump2Sidebar('handling ambient-update (worker)');
    if (panelPort)
      panelPort.postMessage({topic: 'new-user', data: data.name});
    setAmbientNotification(++count);
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
        userName: name,
        displayName: name,
        portrait: "data:image/png;base64,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",
        profileURL: baseUrl + '/profile'
      }
    });

    setAmbientNotification();
  },
  'panel.registration': function(data, port) {
    dump2Sidebar('panel.registration completed');
    panelPort = port;
  },
  'sidebar.registration': function(data, port) {
    dump2Sidebar('sidebar.registration completed');
    sidebarPort = port;
    sidebarPort.postMessage({topic: 'new-connection', name: name});
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
  },
  'chat2-registration': function(data, port) {
    dump2Sidebar('registered chat2 port (worker)');
    chat2Port = port;
  },
  'chat2-message': function(data, port) {
    dump2Sidebar('got chat2-message (worker)');
    sidebarPort.postMessage({topic: 'chat2-message', message: data.data.message});
  },
  'chat2-message-response': function(data, port) {
    dump2Sidebar('got chat2-message-response (worker)');
    chat2Port.postMessage({topic: 'chat-response', data: data});
  },
  'chat3-registration': function(data, port) {
    dump2Sidebar('registered chat3 port (worker)');
    chat3Port = port;
  },
  'chat3-message': function(data, port) {
    dump2Sidebar('got chat3-message (worker)');
    sidebarPort.postMessage({topic: 'chat3-message', message: data.data.message});
  },
  'chat3-message-response': function(data, port) {
    dump2Sidebar('got chat3-message-response (worker)');
    chat3Port.postMessage({topic: 'chat-response', data: data});
  },
  'chat4-registration': function(data, port) {
    dump2Sidebar('registered chat4 port (worker)');
    chat4Port = port;
  },
  'chat4-message': function(data, port) {
    dump2Sidebar('got chat4-message (worker)');
    sidebarPort.postMessage({topic: 'chat4-message', message: data.data.message});
  },
  'chat4-message-response': function(data, port) {
    dump2Sidebar('got chat4-message-response (worker)');
    chat4Port.postMessage({topic: 'chat-response', data: data});
  }
};

var apiPort = null,
    sidebarPort = null,
    panelPort = null,
    chat1Port = null,
    chat2Port = null,
    chat3Port = null,
    chat4Port = null;

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
