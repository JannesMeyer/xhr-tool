/**
 * Sends an asynchronous JSON request
 */
function getJSON(url, callback) {
	var res = Promise.defer();
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
	return res;
}
exports.getJSON = getJSON;