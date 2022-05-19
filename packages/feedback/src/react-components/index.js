import React from 'react'

import FeedbackForm from './feedback/FeedbackForm';
import ThumbsForm from './feedback/ThumbsForm'
import Feedbacks from './feedback/Feedbacks';
import Section from './feedback/Section';
import form from './data/feedback-form.json'

export default function Feedback() {
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
