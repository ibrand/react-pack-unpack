const React = require('react')
const { render } = require('react-dom')
const { pack, unpack } = require('./')

const Title = ({ title }) => <h1>{title}</h1>

const Section = ({ title, children, click }) => (
  <section onClick={click}>
    <Title title={title} />
    {children}
  </section>
)

let Hello = unpack(`
  <Section title={title} click={click}>{children}</Section>`, { Section })

render(Hello({
  title: 'Hello world',
  children: (<Title title='beep boop' />),
  click: () => console.log('Clickity click')
}), document.body)
