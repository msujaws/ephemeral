/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


var SPRITES = {
  bugIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUFBMzNCQ0JCOThEMTFFMThFRUI5Njk2MEUzNzYyNUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUFBMzNCQ0NCOThEMTFFMThFRUI5Njk2MEUzNzYyNUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QUEzM0JDOUI5OEQxMUUxOEVFQjk2OTYwRTM3NjI1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QUEzM0JDQUI5OEQxMUUxOEVFQjk2OTYwRTM3NjI1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Piq9YVIAAB6mSURBVHjaxHsJeFXl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",
  mentionIcon: "data:image/png;base64,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%3D",
  shareIcon: "data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%F3%FFa%00%00%00%04gAMA%00%00%AF%C87%05%8A%E9%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C9e%3C%00%00%02FIDAT8%CB%A5%93KO%1AQ%14%C7%5D%F8E%FC%06%2CY%E9W%F1C%D8%A6%ABv3I%D3U%13c%0D%C8C%18%01%E5%0D%A1%F2%0A%10%18%C0%F0*%223%80B%82%24%20h%9A%96%B6%3C%92%01%CD%BF%E7%CEb%A2%01%BB%E9%E2%3Fs3w%FE%BFs%EE9%E7n%00%D8%F8%1F)%8F%7C%3E%BF%99%CDfw%04A%D8K%A7%D3%7C*%95*%26%12%89a%3C%1E%97c%B1%98%1C%89D%86%E7%E7%E7%C5P(%C4%07%83%C1%3D%9F%CF%B7%E3%F1x6U%00%99%B9J%A5%02Q%14%D1j%B5T5%9BMu%DDh4P%ADVA%C1%10%0E%87%E1r%B98%15%90%C9d0%9DN1%1C%0E%D1n%B7Q%AF%D7%95%9F%CB%E5%B2%22%B6fp%B67%1A%8D0%1E%8Fqvv%06%15%40i%CB%B7%B7%B7%98L%26%10n%BE%23%20%FD%84%AF5%87%B7%FD%08%EF%CD%23%9C%E2%14%8E%CA%03bW%03%8C%7F%FFQ%80%0E%87CV%01t%E6m%3A%F3Rj%5E%C3v%D1%03_z%80%E3j%02wk%01%17%C9z%F9%0B_2%7D%7C%8E%5D%C3%19%2F%C0n%B7%2FONN%B6U%00%13%15L%1B%8DF%97%D5z%03%D6%94%84O%BE%12%3E%9C%5E%E0%1D%9F%C5%1B%8B%00%CE%5D%80%3FU%7Ca~%01%60%A2Jk%A9%D2%CB%CB%2B%11%96%A4%88%F7%A7y%BC%B5%0A%F8%E8)%E2k%BA%B4b%5E%010Q%9B%B4~%BF%7F%F9%ADz%89T%AD%0B%DF%C55%22%C2z%F3Z%00%93%D7%EB%D5%BA%DD%EE%A7%C5b%A1t%87%CCO%EB%CC%AF%02%98%9CN%A7%97%B5%ADT*%81%E7y%DB%3F'%F1%B9(%F2%16%F5x%97%DAT%E9v%BB%C8%E5r%B0X%2Cy%B3%D9%BCk4%1A%B7%5E%05%D0hjh%BA%8A%81%40%004%17%A0%F1%C5%600P%DET%17Pqq%7C%7C%0C%9DNW%3C%3C%3C%D4%AC%00%C8%FCC%92%24%C8%B2%8C%D9l%86%BB%BB%3BE%0Cr%7F%7F%AF%7Cc%7B%C9d%12%07%07%07%A3%15%00%A5%CD%B1H%85B%01%9DN%07%FD~%1F%F3%F9%5CQ%AF%D7C%ADVS%EE%C0%D1%D1%11%F6%F7%F7%B9%B55%B0%D9l%1A%AB%D5%CAQ%AAY%93%C9%D41%18%0C%D0%EB%F5%2C%ED.%A5%9D%A5%C8%1C%995%CF%3D%7F%01%A4%B5%0D%AFqXx%F8%00%00%00%00IEND%AEB%60%82",
  sharedIcon: "data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%04%00%00%00%B5%FA7%EA%00%00%00%04gAMA%00%00%AF%C87%05%8A%E9%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C9e%3C%00%00%01CIDAT(%CF%7D%D0KJB%01%14%87%F13p%23%EE%C0%A1%A3%DC%8A%8Bp%09w%05%22bO%CBL%CC%B2%BA%88Ybb%99%90%3D.%A6%D5%25%0D%2B%7C%05ef%3E%E0v%91%AF%81a%DA%20%FE%C3%EF78%1CA%FE%9F%209K%D6q%E2%CA%04%D2%F9T3i%1C%1A%89f%3C%1F%0B%A8%AE%1D%C7%B6%05%11%24%AB%5CRBGG%E7%0E%1D%9D%5B4r%EC%13Q%10A%8E%E9%D3%A4L%11%8D%0B.%D0(Q%A6E%870%88%20%19%E3%91%1E%1Ftx%A7%CD%0B%CF%3CP%A3%87F%C8%40%04I%CF%A5%CC2%3D%3A%BC%D2%E4%91%7B%AA%7C%A2%B1a%AE%CF!%82%20I%FB%81%A9%D3%A3%C5%03En%E9N%F2%0F%40%E2%F6%98yC%97k%B4%99%3C%01%88j%DF5%0B%BC%D1%E5j*O%01%24j%DF%1A%7D%D1gc%F4%9Bg%00%B2%19-sN%20%F8%E7%93%E3mY%C3%CE%D0e%95SVs%2B%CE%25%EB%0C%D8%B6E%F2%7BdHP'%81J%0C%3F%BE%BC%D76%01%91%F6%0D%06%03%1A4%A8%F3%C2%00%83%23%3C%AD%09%08%2B*gT%A81d%C8%13%05%F6Y%C0%ADL%DD%10%B4%AD)%FE%ECre%91y%7CUo%D6%A3%B8m%E3%F2%0D%DE%C7e%25%9Ebw%9D%00%00%00%00IEND%AEB%60%82",
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
      dump("No handler found for " + msg.topic + "\n");
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
