const React = require('react')
const { render } = require('react-dom')
const { pack, unpack } = require('./')

const Title = ({ title }) => <h1>{title}</h1>

const Section = ({ title, body, click }) => (
  <section onClick={click}>
    <Title title={title} />
    <p dangerouslySetInnerHTML={{__html: body}} />
  </section>
)

let Hello = unpack(`
  <Section
    title={title}
    body={body}
    click={click}
  />`, { Section })

render(Hello({
  title: 'Hello world',
  body: `We're dangerous`,
  click: () => console.log('Clickity click')
}), document.body)
