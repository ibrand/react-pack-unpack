# react-pack-unpack
Pack and unpack React components to and from a database to use JSX as a templating language. More specifically, by storing the JSX templates this way, there is room for props to act as template variables to be resolved on the frontend upon making a request for the component.

## install

`npm install react-pack-unpack` (not yet published)

## api

```js
const { pack, unpack } = require('react-pack-unpack')
```

#### `pack : ReactElement -> (String, Dependencies)`

Note: `pack` is not exactly complementary to `unpack` as `pack` takes a `ReactElement` and unpack returns a `ReactComponent`.

```js
let jsxstr = pack(element)
```

#### `unpack : (String, Dependencies) -> ReactComponent`

```js
let component = unpack(jsxstr, dependencies)
```

where `dependencies` is an object of react components that appear in the jsx string (see `example.js` for more clarity)
