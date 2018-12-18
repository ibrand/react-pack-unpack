const React = require('react')
const jsx = require('jsx-transform')
const { render } = require('react-dom')

const Title = ({ title }) => <h1>{title}</h1>

const Section = ({ title, children, click }) => (
  <section onClick={click}>
    <Title title={title} />
    {children}
  </section>
)

// const javascriptCodeFromJSXAsString = jsx.fromString(`<Section title={`test title`} children={`this is a child text node`}>{`this should be a child text node but is not`}</Section>`, {
//   factory: 'React.createElement'
// })

render(Section({ title: 'test' }, [`this should be a child text node`]), document.body)
