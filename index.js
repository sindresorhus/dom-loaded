'use strict';

module.exports = new Promise(resolve => {
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
