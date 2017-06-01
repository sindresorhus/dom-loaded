# dom-loaded [![Build Status](https://travis-ci.org/sindresorhus/dom-loaded.svg?branch=master)](https://travis-ci.org/sindresorhus/dom-loaded)

> Check when the DOM is loaded like [`DOMContentLoaded`](https://developer.mozilla.org/en/docs/Web/Events/DOMContentLoaded)

Unlike `DOMContentLoaded`, this also works when included after the DOM was loaded.


## Install

```
$ npm install dom-loaded
```


## Usage

```js
const domLoaded = require('dom-loaded');

domLoaded.then(() => {
	console.log('DOM is loaded');
});
```


## Related

- [element-ready](https://github.com/sindresorhus/element-ready) - Detect when an element is ready in the DOM


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
