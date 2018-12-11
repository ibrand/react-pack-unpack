const React = require('react')
const jsx = require('jsx-transform')

function unpack (str = ``, deps = {}) {
  let code = jsx.fromString(str.trim(), {
    factory: 'React.createElement'
  })
  return function (props = {}) {
    let depNames = Object.keys(deps)
    let propNames = Object.keys(props)
    let fn = Function.apply(Function, ['React', ...depNames, ...propNames, `
        "use strict";
        return ${code}
      `])
    return fn.apply(fn, [React, ...Object.values(deps), ...Object.values(props)])
  }
}

function pack () {}

module.exports = {
  pack,
  unpack
}
