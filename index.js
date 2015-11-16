/**
 * Sends an asynchronous request and returns a Promise for the parsed JSON response
 *
 * @param url The URL to fetch and parse
 */
function getJSON(url) {
	return new Promise(function(resolve, reject) {
		if (typeof url !== 'string') {
			reject(new TypeError('First argument has to be a string'));
			return;
		}
		if (typeof XMLHttpRequest === 'undefined') {
			reject(new Error('XMLHttpRequest not available'));
			return;
		}
		// Build XmlHttpRequest object
		var req = new XMLHttpRequest();
		req.onload = function() {
			if (req.status < 200 || req.status >= 400) return reject(new Error('Error ' + req.status));
			try {
				resolve(JSON.parse(req.response));
			} catch (err) {
				reject(err);
			}
		};
		req.onerror = reject.bind(null, new Error('Error ' + req.status));
		req.ontimeout = reject.bind(null, new Error('Request timeout'));
		req.open('GET', url);
		req.setRequestHeader('Accept', 'application/json');
		// Send request
		req.send();
	});
}
exports.getJSON = getJSON;
