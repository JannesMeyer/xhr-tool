/**
 * Sends an asynchronous HTTP request and returns a Promise
 *
 * @param url The URL to fetch
 */
function request(method, url, accept) {
  if (typeof XMLHttpRequest === 'undefined') {
    throw new Error('XMLHttpRequest not available');
  }

  return new Promise(function(resolve, reject) {
    // Create request
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (200 <= req.status && req.status < 300) {
          resolve(req.responseText);
        } else {
          reject(new Error(req.status + ' ' + req.statusText));
        }
      }
    };

    // Open
    req.open(method, url, true);
    if (accept != null) {
      req.setRequestHeader('Accept', accept);
    }

    // Start fetching
    req.send();
  });
}

function getJSON(url) {
  return send('GET', url, 'application/json').then(JSON.parse);
}

exports.request = request;
exports.getJSON = getJSON;