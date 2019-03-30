/**
Check when the DOM is loaded like [`DOMContentLoaded`](https://developer.mozilla.org/en/docs/Web/Events/DOMContentLoaded).

@example
```
import domLoaded = require('dom-loaded');

(async () => {
	await domLoaded;
	console.log('DOM is loaded');
})();
```
*/
declare const domLoaded: Promise<void> & {
	// TODO: remove this in the next major version
	default: typeof domLoaded;
};

export = domLoaded;
