import fs from 'fs';
import test from 'ava';
import jsdom from 'jsdom/lib/old-api';

const m = fs.readFileSync('index.js', 'utf8');

test.cb(t => {
	jsdom.env('<div>', {
		scripts: `window.domLoaded = ${m}`,
		created: async (err, window) => {
			let isLoaded = false;

			window.document.addEventListener('DOMContentLoaded', () => {
				isLoaded = true;
			});

			t.false(isLoaded);
			await window.domLoaded;
			t.true(isLoaded);
			t.end();
		}
	});
});
