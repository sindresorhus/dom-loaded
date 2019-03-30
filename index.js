'use strict';

const domLoaded = new Promise(resolve => {
	if (document.readyState === 'interactive' || document.readyState === 'complete') {
		resolve();
	} else {
		document.addEventListener('DOMContentLoaded', () => {
			resolve();
		}, {
			capture: true,
			once: true,
			passive: true
		});
	}
});

module.exports = domLoaded;
// TODO: remove this in the next major version
module.exports.default = domLoaded;
