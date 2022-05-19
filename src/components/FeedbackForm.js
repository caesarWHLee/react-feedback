import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
`

const Button = styled.button`
  margin-top: 12px;
  width: 120px;
  background-color: #04295E;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 18px;
  line-height: 27px;

  &:hover, &:focus {
    background-color: rgba(0, 0, 0, 0.15);
  }
`

export default function FeedbackForm(props) {
  const submitHandler = (e) => {
    const form = e.target;
  }
  return <Form onSubmit={submitHandler}>
    {props.children}
    <ButtonWrapper>
      <Button>送出</Button>
    </ButtonWrapper>
  </Form>
}