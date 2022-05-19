import styled from 'styled-components';
import ThumbsField from './ThumbsField';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function FeedbackForm(props) {
  const submitHandler = (e) => {

  }
  return <Form onSubmit={submitHandler}>
    <ThumbsField />
  </Form>
}