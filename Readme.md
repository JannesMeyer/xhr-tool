# xhr-tool

[![Build Status](https://travis-ci.org/JannesMeyer/xhr-tool.svg?branch=master)](https://travis-ci.org/JannesMeyer/xhr-tool)
[![Dependencies](https://david-dm.org/JannesMeyer/xhr-tool.svg)](https://david-dm.org/JannesMeyer/xhr-tool)
[![Development Dependencies](https://david-dm.org/JannesMeyer/xhr-tool/dev-status.svg)](https://david-dm.org/JannesMeyer/xhr-tool#info=devDependencies)

Install the package like this:

	npm install xhr-tool

**Import the function**

~~~js
var getJSON = require('xhr-tool').getJSON;
~~~

Needs a browser that supports Promises or a Promise polyfill.

## getJSON

	getJSON(url) → Promise → Object

Sends an asynchronous request and returns a Promise for the parsed JSON response

Example usage:

~~~js
getJSON('http://www.nactem.ac.uk/software/acromine/dictionary.py?sf=BMI').then(function(obj) {
	console.log(obj);
});
~~~
