import './App.css';
import Heading from './components/Heading';
import Section from './components/Section';


function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Section>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Section>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Section>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Section>
              <Heading level={5}>Sub-sub-sub-heading</Heading>
              <Heading level={5}>Sub-sub-sub-heading</Heading>
              <Heading level={5}>Sub-sub-sub-heading</Heading>
              <Section>
                <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
                <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
                <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Page />
    </div>
  );
}

export default App;
