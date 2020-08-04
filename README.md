# include-html.js

A tiny _js script_ to include _html_ files in _html_ documents.

## How to use

---

Simply include the `include-html.min.js` script in your `<head>` and add a `data-include` attribute on any valid _HTML_ element.

_include-html_ will fetch the value of that attribute, and **replace** the element with the fetched file.

If, `include-me.html` looked like this:

```html
<h1>Hello, world!</h1>
```

Then, a document like this:

```html
<head>
  <script src="include-html.min.js"></script>
</head>
<body>
  <div data-include="include-me.html"></div>
</body>
```

Would end up rendering like this:

```html
<body>
  <h1>Hello, world!</h1>
</body>
```

## Important note

---

In local environments you must emulate a web server (like [live server](https://github.com/ritwickdey/vscode-live-server)).

### Why ?

The script uses the _**XMLHttpRequest**_ object so it only works through _**http requests**_, if you open your _HTML_ file from your hard drive with the _**file protocol**_, the request will mark an _**error CORS**_.
