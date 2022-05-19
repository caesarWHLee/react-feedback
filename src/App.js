import FeedbackForm from './components/FeedbackForm';
import Feedbacks from './components/Feedbacks';
import Section from './components/Section';
import TextField from './components/TextField';
import ThumbsField from './components/ThumbsField';
import form from './data/feedback-form.json'

function App() {
  return (
    <>
      <Section>
        <FeedbackForm>
          <ThumbsField />
          <TextField />
        </FeedbackForm>
      </Section>
      <Section>
        <Feedbacks />
      </Section>
    </>
  );
}

export default App;
