import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextField from './TextField'

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
    background-color: #000928;
  }
  &:disabled {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export default function FeedbackForm(props) {
  const [enableSumbit, setEnableSubmit] = useState(false)
  const [textAreaValue, setTextAreaValue] = useState('')

  useEffect(() => {
    const isScriptExist = document.getElementById('recaptcha-key')

    if (!isScriptExist) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6LeHLAEgAAAAADb0pcN6CVZdgD7KFDtCFElRu-f7'
      script.id = 'recaptcha-key'
      script.onload = () => {
        console.log('recaptcha-key script loaded')
      }
      document.body.appendChild(script)

      if (isScriptExist) {
        console.log('recaptcha-key script loaded')
      }
    }
  }, [])

  const textAreaChanged = (e) => {
    const value = e.target.value
    setEnableSubmit(!!value)
    setTextAreaValue(value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(textAreaValue)

    if (!textAreaValue.trim()) {
      return
    }

    const { grecaptcha } = window
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6LeHLAEgAAAAADb0pcN6CVZdgD7KFDtCFElRu-f7', { action: 'submit' })
      console.log(token)
    })

    setTextAreaValue('')
    setEnableSubmit(false)
  }
  return <Form onSubmit={submitHandler}>
    <TextField textAreaValue={textAreaValue} onChange={textAreaChanged} />
    <ButtonWrapper>
      <Button disabled={!enableSumbit}>送出</Button>
    </ButtonWrapper>
  </Form>
}