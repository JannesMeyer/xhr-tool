/**
 * Sends an asynchronous request and returns a Promise for the parsed JSON response
 */
function getJSON(url) {
	var res = Promise.defer();
	if (typeof XMLHttpRequest !== 'undefined') {
		var req = new XMLHttpRequest();
		req.onload = function() {
			try {
				res.resolve(JSON.parse(req.response));
			} catch (err) {
				res.reject(err);
			}
		};
		req.onerror = function() {
			res.reject(new Error('Error ' + req.status));
		};
		req.ontimeout = function() {
			res.reject(new Error('Request timeout'));
		};
		req.open('GET', url);
		req.setRequestHeader('Accept', 'application/json');
		req.send();
	} else {
		res.reject(new Error('XMLHttpRequest not available'));
	}
	return res;
}
exports.getJSON = getJSON;