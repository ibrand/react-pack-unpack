const React = require('react')
const { render } = require('react-dom')
const { pack, unpack } = require('./')

const Title = ({ title }) => <h1>{title}</h1>

const Section = ({ title, click, children }) => (
  <section onClick={click}>
    <Title title={title} />
    {children}
  </section>
)

// By listing Section as a dependency, we indicate that Section is the
// container for us to unpack our jsx into
let Hello = unpack(`
  <Section title={title} click={click}>
    <p>Beep boop</p>
  </Section>
`, { Section })

let jsxString = pack(Hello({
  title: 'Hello world',
  click: () => console.log('Clickity click')
}), { useFunctionCode: true })

// jsxString will look like this in the DB:
/*
  <Section title={`Hello world`}
    click={function click() {
        return console.log('Clickity click');
      }}>
    <p>
      Beep boop
    </p>
  </Section>
*/

render(
  <div>
    <Hello
      title='Hello world'
      click={() => console.log('Clickity click')} />
    <hr />
    <pre>{jsxString}</pre>
  </div>
, document.body)
