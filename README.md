# react-pack-unpack
React component builder that allows for packing and unpacking React components to and from a database

## install

`npm install react-pack-unpack` (not yet published)

## api

```js
const { pack, unpack } = require('react-pack-unpack')
```

#### `pack : ReactComponent -> (String, Dependencies)`

```js
let [str, dependencies] = pack(component)
```

#### `unpack : (String, Dependencies) -> ReactComponent`

```js
let component = unpack(str, dependencies)
```

where the `dependencies` is an object of react components, such as

```js
{
  Component: require('react').Component
}
```

## example

```jsx
const React = require('react')
const { pack, unpack } = require('react-pack-unpack')

const Greeting = name => (
  <div>Hello {name}!</div>
)

let [str, deps] = pack(Greeting)
console.log(str) // <div>Hello {name}</div>
console.log(deps) // {}

let UnpackedGreeting = unpack(str)
console.log(Greeting.toString() === UnpackedGreeting.toString())
```
