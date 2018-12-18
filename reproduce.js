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

const javascriptCodeFromJSXAsString = jsx.fromString(`<Section title={\`test title\`}>{\`this should be a child text node but is not\`}</Section>`, {
  factory: 'React.createElement',
  arrayChildren: false
})
console.log(javascriptCodeFromJSXAsString)

render(Section({ title: 'test' }, [`this should be a child text node`]), document.body)
