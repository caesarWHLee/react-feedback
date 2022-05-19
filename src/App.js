import FeedbackForm from './components/FeedbackForm';
import ThumbsForm from './components/ThumbsForm'
import Feedbacks from './components/Feedbacks';
import Section from './components/Section';
import form from './data/feedback-form.json'

function App() {
  return (
    <>
      <Section>
        {form.fields.map(field => {
          if (field.type === 'single') {
            return <ThumbsForm key={field.id} />
          } else {
            //field.type === 'text'
            return <FeedbackForm key={field.id} />
          }
        })}
      </Section>
      <Section>
        <Feedbacks />
      </Section>
    </>
  );
}

export default App;
