const React = require('react')
const jsx = require('jsx-transform')

function unpack (str = ``, dependencies = {}) {
  const code = jsx.fromString(str.trim(), {
    factory: 'React.createElement'
  })
  console.log(code)
  return (props = {}) => {
    const variables = { React, ...dependencies, ...props }
    const fn = new Function(...Object.keys(variables), `
      'use strict';
      return ${code}
    `)
    return fn(...Object.values(variables))
  }
}

// function pack () {
  // const Comp = ({ title, body, click }) => (
    // <section onClick={click}>
    // <Title title={title} />
      // <p dangerouslySetInnerHTML={{__html: body}} />
    // </section>
  // )

  // console.log(Comp)
// }

module.exports = {
  // pack,
  unpack
}
