'use strict';

const hasLoaded = () => document.readyState === 'interactive' || document.readyState === 'complete';

const domLoaded = new Promise(resolve => {
	if (hasLoaded()) {
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

Object.defineProperty(domLoaded, 'hasLoaded', {
	get: () => hasLoaded()
});

module.exports = domLoaded;
