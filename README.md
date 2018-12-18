# react-pack-unpack
React component builder that allows for packing and unpacking React components to and from a database

## install

`npm install react-pack-unpack` (not yet published)

## api

```js
const { pack, unpack } = require('react-pack-unpack')
```

#### `pack : ReactElement -> (String, Dependencies)`

Note: `pack` is not exactly complementary to `unpack`.

```js
let jsxstr = pack(element)
```

#### `unpack : (String, Dependencies) -> ReactComponent`

```js
let component = unpack(jsxstr, dependencies)
```

where `dependencies` is an object of react components.
