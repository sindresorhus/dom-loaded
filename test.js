import fs from 'fs';
import test from 'ava';
import {JSDOM} from 'jsdom';

const domLoaded = fs.readFileSync('index.js', 'utf8');
const umdWrappedDomLoaded = `
	window.domLoaded = (() => {
		const module = {};
		${domLoaded}
		return module.exports;
	})();`;

test('works when included before `DOMContentLoaded` fired', async t => {
	const {window} = new JSDOM('<body></body>', {
		runScripts: 'outside-only'
	});

	window.eval(umdWrappedDomLoaded);

	let isLoaded = false;
	window.document.addEventListener('DOMContentLoaded', () => {
		isLoaded = true;
	});

	t.plan(3);
	t.false(isLoaded);
	await window.domLoaded.then(() => {
		t.pass();
	});
	t.true(isLoaded);
});

test('works when included after `DOMContentLoaded` fired', async t => {
	const {window} = new JSDOM('<body></body>', {
		runScripts: 'outside-only'
	});

	const loadedPromise = new Promise(resolve =>
		window.document.addEventListener('DOMContentLoaded', resolve)
	);

	await loadedPromise;
	window.eval(umdWrappedDomLoaded);

	t.plan(1);
	await window.domLoaded.then(() => {
		t.pass();
	});
});
