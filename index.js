const React = require('react')
const jsx = require('jsx-transform')
const toString = require('../jsx-to-string')

function unpack (str = ``, deps = {}) {
  let code
  try {
    code = jsx.fromString(str.trim(), {
      factory: 'React.createElement'
    })
  } catch (e) {
    console.error(e)
    return () => {}
  }
  return function (props = {}) {
    let depNames = Object.keys(deps)
    let propNames = Object.keys(props)
    let fn = Function.apply(Function, ['React', ...depNames, ...propNames, `
        "use strict";
        return ${code}
      `])
    try {
      return fn.apply(fn, [React, ...Object.values(deps), ...Object.values(props)])
    } catch (e) {
      console.error(e)
      return ``
    }
  }
}

module.exports = {
  pack: toString,
  unpack
}
